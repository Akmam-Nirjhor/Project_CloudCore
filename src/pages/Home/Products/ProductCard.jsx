import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, image, category, price, discount_amount } = product;

  // Construct the full image URL
  const imageUrl = `https://admin.refabry.com/storage/product/${image}`;

  return (
    <div className="bg-amber-400  ">
      <div className="card bg-slate-100 w-96 h-96 shadow-sm transition-transform transform hover:scale-105 hover:shadow-xl ease-in-out duration-300  ">
        <figure>
          <img
            className="h-96 w-max object-cover p-20 transition-transform ease-in-out duration-100 hover:scale-110"
            src={imageUrl}
            alt={name}
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-xl">{name}</h2>
          <p className="text-left text-sm text-gray-600">
            Discount amount: {discount_amount}
          </p>
          <div className="card-actions  mt-4">
            <div className="flex justify-between gap-20">
              <div>
                {" "}
                <Link to={`/productDetails/${product.id}`}>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
              <div>
                {" "}
                <Link to={`https://admin.refabry.com/storage/product/${id}`}>
                  <button className="btn btn-primary">Buy Now</button>
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
