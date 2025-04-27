import React from "react";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const ProductCard = ({ product }) => {
  const { id, name, image, category, price, discount_amount } = product;

  const imageUrl = `https://admin.refabry.com/storage/product/${image}`;

  return (
    <div className="w-96 max-w-full md:w-72 lg:w-72 xl:w-72 mx-auto my-4">
      <div className="card shadow-sm p-4 h-116">
        <figure>
          <img
            className="h-72 w-full p-2 object-contain"
            src={imageUrl}
            alt={name}
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl font-semibold text-gray-900">
            {name}
          </h2>
          <h2 className="text-left font-bold">Product ID : {id}</h2>
          <p className="text-left text-sm font-bold text-gray-600">
            Price: {price}
          </p>

          <div className="card-actions mt-4">
            <div className="flex justify-between items-center gap-4">
              <div>
                <Link to={`/productDetails/${product.id}`}>
                  <button className="bg-orange-400 hover:bg-orange-600 text-white font-semibold text-xs p-1 md:p-3 px-2 rounded">
                    View Details
                  </button>
                </Link>
              </div>
              <div>
                <Link to={`/addToCart`}>
                  <button className="bg-orange-400 hover:bg-orange-600 text-white font-semibold text-xs p-1 md:p-3 px-2 rounded flex items-center gap-1">
                    Add to Cart
                    <IoMdCart className="w-4 h-4 font-bold" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
