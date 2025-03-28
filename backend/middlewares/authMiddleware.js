import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
   const token = req.cookies?.cloudinary_example;

   if (!token) {
     return res.status(401).json({
         message: 'Unauthorized access token!',
         success: false,
      })
   }

   try {
      req.user = await jwt.verify(token, process.env.JWT_SECRET);
      next();

   } catch (err) {
      console.log('AuthMiddleware Error: ', err.message);
      return res.status(403).json({
         message: 'Forbidden access token!',
         success: false,
      })
   }
};

export default authMiddleware;