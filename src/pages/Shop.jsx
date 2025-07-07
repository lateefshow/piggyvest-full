import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCartShopping } from "react-icons/fa6";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-24 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Explore Products</h1>
        <p className="text-gray-500 mt-2">Find something you'll love</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div className="h-56 bg-gray-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain p-4"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-green-600 font-bold text-lg mt-2">
                ${product.price}
              </p>
              <p className="text-gray-500 text-sm mt-1 italic">
                {product.category}
              </p>
            </div>

            <div className="p-4 border-t border-gray-200">
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white text-sm py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-300">
                Add to Cart <FaCartShopping />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
