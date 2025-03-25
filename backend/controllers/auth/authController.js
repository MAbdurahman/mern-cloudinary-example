/************************* imports *************************/
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/userModel.js';
import ErrorHandler from '../../utils/errorHandlerUtil.js';
import {validateEmail, validateName, validatePassword} from '../../utils/functionsUtil.js';

export const signUpUser = async (req, res, next) => {
   const {email, password, username} = req.body;

   res.status(201).json({
      message: 'SignUp User',
   })
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