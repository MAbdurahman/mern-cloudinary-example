/************************* imports *************************/
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/userModel.js';
import ErrorHandler from '../../utils/errorHandlerUtil.js';

export const signUpUser = async (req, res, next) => {
   console.log('signUpUser');
}

export const signInUser = async (req, res, next) => {
   console.log('signInUser');
}

export const signOutUser = async (req, res, next) => {
   console.log('signOutUser');
}