import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      sizes,
      bestseller,
      isDiscounted,
      discountAmount,
      stock,
      brand,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];

    const requiredFields = { name, description, price, brand, sizes };
    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (
      missingFields.length === Object.keys(requiredFields).length &&
      !image1 &&
      !image2
    ) {
      return res.status(400).json({
        success: false,
        message: "Vous devez fournir au moins un champ requis et une image.",
        requiredFields: Object.keys(requiredFields),
      });
    }

    const images = [image1, image2].filter((item) => item !== undefined);

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      bestseller: bestseller === "true",
      sizes: JSON.parse(sizes),
      isDiscounted: isDiscounted === "true",
      discountAmount: Number(discountAmount),
      stock: stock === "true",
      brand,
      image: imagesUrl,
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.status(200).json({ success: true, message: "Product added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const listProducts = async (req, res) => {
  try {
    const { category, bestseller } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (bestseller === "true") filter.bestseller = true;

    const products = await productModel.find(filter).limit(10);
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.status(200).json({ success: true, message: "Product removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };
