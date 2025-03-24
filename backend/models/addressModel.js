/************************* imports *************************/
import {model, Schema} from 'mongoose';

const addressSchema = new Schema(
   {
      userId: String,
      address: String,
      city: String,
      state: String,
      zipCode: String,
      phone: String,
      notes: String,
   },
   { timestamps: true }
);

const Address = new model('Address', addressSchema);
export default Address;