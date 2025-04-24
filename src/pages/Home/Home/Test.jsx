import React, { useEffect, useState } from "react";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          "https://admin.refabry.com/api/all/product/get"
        );
        const data = await response.json();

        const foundProduct = data.data.data.find((p) => p.id === 8);
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <img
        src={`https://admin.refabry.com/storage/product/${product.image}`}
        alt={product.name}
        className="w-full rounded mb-4"
      />
      <p className="text-gray-700 mb-2">{product.short_desc}</p>
      <p className="text-lg font-semibold text-green-600">৳ {product.price}</p>
      <p className="text-sm text-gray-500">Stock: {product.stock}</p>
    </div>
  );
};

export default SingleProduct;
