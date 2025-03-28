/************************* imports *************************/
import {model, Schema} from 'mongoose';

const orderSchema = new Schema({
      userId: String,
      cartId: String,
      cartItems: [
         {
            productId: String,
            productName: String,
            image: String,
            price: String,
            quantity: Number
         }
      ],
      addressInfo: {
         addressId: String,
         address: String,
         city: String,
         zipCode: String,
         phone: String,
         notes: String
      },
      orderStatus: String,
      paymentMethod: String,
      paymentStatus: String,
      totalAmount: Number,
      orderDate: Date,
      orderUpdateDate: Date,
      paymentId: String,
      payerId: String
   },
   {timestamps: true}
);

const Order = model('Order', orderSchema);
export default Order;