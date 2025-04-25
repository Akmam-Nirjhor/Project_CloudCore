import React from "react";
import { useLoaderData } from "react-router-dom";
import NavigationBar from "../../NavigationBar/NavigationBar";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();

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

            <p className="text-2xl font-bold mb-4">৳ {product.price}</p>

            {/* Size Selection */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Size</label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full">
                <option>Choose an option</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-16 text-center border border-gray-300 rounded py-2"
              />
              <Link to="/addToCart">
                {" "}
                <button className="bg-orange-400 hover:bg-amber-600 text-black font-semibold px-6 py-2 rounded">
                  ADD TO CART
                </button>
              </Link>
            </div>

            {/* Description */}
            <div className="text-gray-700 space-y-2 text-sm">
              <p>
                Great for training, workouts, running and sports or daily wear
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Made of 100% Polyester</li>
                <li>Mesh construction fabric</li>
                <li>Light weight and breathable</li>
                <li>Athletic Fit & Comfortable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
