import jwt from 'jsonwebtoken';

export const generateToken = (res, user) => {
   return jwt.sign({
      id: user.id,
      role: user.role,
      email: user.email,
      username: user.username
   }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_TIME
   });
};