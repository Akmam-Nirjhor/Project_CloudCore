import React from "react";
import { useLoaderData } from "react-router-dom";
import NavigationBar from "../../NavigationBar/NavigationBar";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { id, name, image, category, price, discount_amount, short_desc } =
    product;

  if (!product) {
    return <p className="text-center text-red-600">Product not found.</p>;
  }

  return (
    <div>
      <NavigationBar />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src={`https://admin.refabry.com/storage/product/${product.image}`}
              alt={product.name}
              className="w-full max-w-sm rounded-lg shadow-md object-contain"
            />
          </div>

          {/* Right: Details */}
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>

            <p className="text-2xl font-bold mb-4">Price : {product.price}</p>
            <p className="font-bold text-2xl">Product Description</p>

            <p className="border-2 p-2 bg-orange-50 mt-2">{short_desc}</p>

            {/* Size Selection */}
            <div className="mb-4"></div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-6"></div>

            {/* Description */}
            <div className="text-gray-700 space-y-2 text-sm">
              <p className="font-bold text-2xl">Feature</p>
              <p>
                Great for training, workouts, running and sports or daily wear
              </p>
              <ul className="list-disc pl-5 space-y-1 marker:text-orange-400">
                <li>Made of 100% Polyester</li>
                <li>Mesh construction fabric</li>
                <li>Light weight and breathable</li>
                <li>Winter-Ready Athletic Fit & Cozy Comfort</li>
              </ul>
            </div>

            <br />
            <Link to="/addToCart">
              <button className="btn w-full md:w-auto px-4 bg-orange-400 text-white hover:bg-orange-600">
                ADD TO CART
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
