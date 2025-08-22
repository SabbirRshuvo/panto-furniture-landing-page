import React from "react";
import getImgUrl from "../utility/getImgUrl";
import Rating from "../Components/Rating";
import { FiPlus } from "react-icons/fi";

const ProductCart = ({ product }) => {
  return (
    <div>
      <div className="bg-[#FAFAFA] ">
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div>
      <div className="p-6 bg-white dark:bg-black shadow-sm">
        <h4 className="text-base mb-1">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className="mt-5 flex justify-between items-center">
          <p className="text-secondary dark:text-white font-bold text-lg">
            <sup>$</sup>
            <span>{product.price}</span>
          </p>
          <button className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer">
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
