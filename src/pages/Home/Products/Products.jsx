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
      });
  }, []);

  return (
    <div className="text-center my-8 px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl text-orange-400 mb-4 font-bold">
        New Arrival Products
      </h3>
      <p className="text-lg font-semibold mb-6">
        Total Products: {products.length}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center ">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
