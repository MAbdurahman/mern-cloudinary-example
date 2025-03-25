/************************* imports *************************/
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/userModel.js';
import ErrorHandler from '../../utils/errorHandlerUtil.js';
import {validateEmail, validateName, validatePassword, messageHandler} from '../../utils/functionsUtil.js';

export const signUpUser = async (req, res, next) => {
   const {email, password, username} = req.body;
   try {
      if (!username) {
         messageHandler(res, 'Full name is required!', false, 400 );
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
         let message = 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special character!'
         messageHandler(res, message, false, 400);
         next();
      }

      const userAlreadyExists = await User.findOne({email});
      if (userAlreadyExists) {
         messageHandler(res, 'User already exists!', false, 409);
         next();

      }
      const newUser = await User.create({
         email,
         password,
         username,
      });

      res.status(201).json({
         message: "User successfully signed up!",
         success: true,
         newUser: newUser
      })

   } catch(err) {
      console.error('Error signing up user: ', err.message);
      return next(new ErrorHandler('Error signing up user: '+err.message, 500));

   }
}

export const signInUser = async (req, res, next) => {
   console.log('signInUser');
   res.status(200).json({
      message: 'SignIn User',
   })
}

export const signOutUser = async (req, res, next) => {
   console.log('signOutUser');
   res.status(200).json({
      message: 'SignOut User',
   })
}