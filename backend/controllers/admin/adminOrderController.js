import Order from '../../models/orderModel.js';

export const getAllOrders = async (req, res, next) => {
   res.status(200).json({
      message: 'Successfully retrieved all orders!',
      success: true,
      data: {}
   })
}

export const updateOrderStatus = async (req, res, next) => {
   res.status(200).json({
      message: 'Successfully updated order status!',
      success: true,
      data: {}
   })
}

export const updateOrderStock = async (req, res, next) => {
   res.status(200).json({
      message: 'Successfully updated order stock!',
      success: true,
      data: {}
   })
}

export const deleteOrder = async (req, res, next) => {
   res.status(200).json({
      message: 'Successfully deleted order!',
      success: true,
      data: {}
   })
}