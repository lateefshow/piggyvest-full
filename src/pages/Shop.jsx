import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCartShopping } from "react-icons/fa6";

const Shop = () => {
  const [getAxiosProducts, setGetAxiosProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setGetAxiosProducts(res.data);
  };

  console.log(getAxiosProducts);

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="flex items-center justify-center flex-col pt-[150px]">
      <div className="mb-20 ">
        <h1 className="font-semibold text-5xl">Products Listing</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-[20px]">
        {getAxiosProducts.map((products, i) => (
          <div
            className=" flex flex-col  rounded  w-[300px] h-[400px] p-[15px] items-center justify-center shadow-md shadow-gray-400"
            key={i}
          >
            <div className="w-[200px] h-[200px] mb-[10px]">
              <img
                src={products.image}
                alt="images"
                className="w-full h-full bg-blend-color"
              />
            </div>
            <div className="flex flex-col items-center  gap-[10px]">
              <h1 className="font-semibold text-[14px] text-center">
                {products.title}
              </h1>
              <p className="font-semibold text-[14px] text-green-500">
                ${products.price}
              </p>
              <i className="font-semibold text-[14px]">{products.category}</i>
              <button className=" w-100% p-[10px] bg-blue-700 rounded text-white text-center flex items-center gap-2 cursor-pointer ">
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
