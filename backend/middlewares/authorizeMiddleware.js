import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import ErrorHandler from '../utils/errorHandlerUtil.js';

export const isAdmin = async (req, res, next) => {
   if (req.user.role === 'admin') {
      return next(new ErrorHandler('Forbidden! Must be Admin to access this resource!', 403));
   }
   next();
}

export const isAuthenticated = async (req, res, next) => {
   const token = req.cookies?.cloudinary_example;

   if (!token){
      return next (new ErrorHandler('Must be signed in!', 401));
   }
   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();

   } catch(err) {
      console.log('Error in isAuthenticated', err.message);
      return next(new ErrorHandler('Error authenticating: '+err.message, 400));

   }
}

export const isRoleAuthorized = async (...roles) => {
   return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
         return next(
            new ErrorHandler(
               `Role (${req.user.role}) is forbidden access to this resource!`,
               403))
      }
      next();
   };
}