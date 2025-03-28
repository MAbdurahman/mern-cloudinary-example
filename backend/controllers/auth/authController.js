/************************* imports *************************/
import bcrypt from 'bcryptjs';
import User from '../../models/userModel.js';
import ErrorHandler from '../../utils/errorHandlerUtil.js';
import {validateEmail, validateName, validatePassword, messageHandler}
   from '../../utils/functionsUtil.js';
import {generateToken} from '../../utils/generateTokenUtil.js';

export const signUpUser = async (req, res, next) => {
   const {email, password, username} = req.body;
   try {
      if (!username) {
         messageHandler(res, 'Full name is required!', false, 400);
         next();
      }

      if (username.length > 33) {
         messageHandler(res, 'Full name cannot exceed 32 characters!', false, 406);
         next();
      }

      if (!validateName(username)) {
         messageHandler(res, 'Enter your first and last name!', false, 406);
         next();
      }

      if (!email) {
         messageHandler(res, 'Email is required!', false, 400);
         next();
      }

      if (!validateEmail(email)) {
         messageHandler(res, 'Enter a valid email address!', false, 406);
         next();
      }

      if (!password) {
         messageHandler(res, 'Passwords is required!', false, 400);
         next();
      }
      if (!validatePassword(password)) {
         let message = 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and a special character!'
         messageHandler(res, message, false, 400);
         next();
      }

      const userAlreadyExists = await User.findOne({email});
      if (userAlreadyExists) {
         messageHandler(res, 'User already exists!', false, 409);
         next();
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
         email,
         password: hashedPassword,
         username
      });

      res.status(201).json({
         message: 'User successfully signed up!',
         success: true,
         newUser: newUser
      })

   } catch (err) {
      console.error('Error signing up user: ', err.message);
      return next(new ErrorHandler('Error signing up user: ' + err.message, 500));
   }
}

export const signInUser = async (req, res, next) => {
   const {email, password} = req.body;

   if (!email) {
      messageHandler(res, 'Email is required!', false, 400);
      next();
   }
   if (!validateEmail(email)) {
      messageHandler(res, 'Enter a valid email address!', false, 406);
      next();
   }
   if (!password) {
      messageHandler(res, 'Password is required!', false, 400);
      next();
   }
   if (!validatePassword(password)) {
      let message = 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and a special character!'
      messageHandler(res, message, false, 406);
      next();
   }

   try {
      const user = await User.findOne({email});
      if (!user) {
         return res.json({
            message: 'User does not exist!',
            success: false,
            statusCode: 404,
            data: {}
         })
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
         return res.json({
            message: 'Invalid credentials!',
            success: false,
            statusCode: 406,
            data: {}
         })
      }

      const token = generateToken(res, user);

      res.cookie('cloudinary_example', token, {
         httpOnly: true,
         secure: process.env.NODE_ENV === 'production',
         expiresIn: new Date(Date.now() + process.env.JWT_EXPIRES_TIME)
      }).status(200).json({
         message: 'User successfully signed in!',
         success: true,
         user: {
            id: user._id,
            email: user.email,
            role: user.role,
            username: user.username
         },
         token: token
      });

   } catch (err) {
      console.error('Error signing in user: ', err.message);
      return next(new ErrorHandler('Error signing in user: ' + err.message, 500));
   }
}

export const signOutUser = async (req, res, next) => {
   res.clearCookie('cloudinary_example').status(200).json({
      message: 'Signed out successfully!',
      success: true,
      data: {}
   });
}