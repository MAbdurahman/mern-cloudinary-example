import express from 'express';
import {isAuthenticated, isAdmin} from '../../middlewares/authorizeMiddleware.js';
import {createProduct, getAllProducts, deleteProduct, updateProduct, getSingleProduct} from '../../controllers/admin/adminProductController.js';


const router = express.Router();

/************************* routes *************************/
router.post('/add-product', createProduct);
router.put('/update-product/:productId',  updateProduct);
router.delete('/delete-product/:productId', deleteProduct);
router.get('/', getAllProducts);
router.get('/:productId', getSingleProduct);







export default router;