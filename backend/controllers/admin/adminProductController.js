import Product from '../../models/productModel.js';
import cloudinaryConfig from '../../config/cloudinaryConfig.js';



export const createProduct = async function (req, res, next) {
   res.status(201).json({
      message: "Product successfully created!",
      success: true,
      data: {}
   })
}

export const getAllProducts = async function (req, res, next) {
   res.status(200).json({
      message: "All products have been retrieved!",
      success: true,
      data: {}
   })
}

export const getSingleProduct = async (req, res, next) => {
   res.status(200).json({
      message: "Product with id is retrieved!",
      success: true,
      data: {}
   })
}

export const updateProduct = async (req, res, next) => {
   res.status(200).json({
      message: "Product with id is updated!",
      success: true,
      data: {}
   })

}

export const deleteProduct = async (req, res, next) => {
   res.status(200).json({
      message: "Product with id is deleted!",
      success: true,
      data: {}
   })
}