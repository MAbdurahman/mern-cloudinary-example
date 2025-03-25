import express from 'express';
import {signInUser, signOutUser, signUpUser} from '../controllers/auth/authController.js';


const router = express.Router();

/************************* routes *************************/
router.post('/sign-up', signUpUser);
router.post('/sign-in', signInUser);
router.post('/sign-out', signOutUser);







export default router;