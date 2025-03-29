import express from 'express';
import {isAuthenticated, isAdmin} from '../../middlewares/authorizeMiddleware.js';
import {getAllOrders, updateOrderStatus, updateOrderStock, deleteOrder} from '../../controllers/admin/adminOrderController.js';


const router = express.Router();

/************************* routes *************************/
router.get('/getAllOrders', getAllOrders);
router.put('/updateOrderStatus', updateOrderStatus);
router.put('/updateOrderStock', updateOrderStock);
router.delete('/deleteOrder', deleteOrder);






export default router;