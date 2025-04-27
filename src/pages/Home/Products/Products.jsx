import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://admin.refabry.com/api/all/product/get")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="text-center my-8 px-4 sm:px-6  ">
      <h3 className="text-3xl text-orange-400  font-bold ">
        New Arrival Products
      </h3>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-2  ">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105 p-4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
