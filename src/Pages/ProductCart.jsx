import React, { useContext } from "react";
import getImgUrl from "../utility/getImgUrl";
import Rating from "../Components/Rating";
import { FiPlus } from "react-icons/fi";
import { CartContext } from "../Context/CartContext";

const ProductCart = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="">
      <div className="bg-[#FAFAFA] ">
        <img
          className="w-10/12 mx-auto pt-6"
          src={getImgUrl(`${product.imageUrl}`)}
          alt=""
        />
      </div>
      <div className="p-6 bg-white  shadow-sm">
        <h4 className="text-base mb-1 dark:text-black">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2 dark:text-black">
          {product.name}
        </h3>
        <Rating rating={product.rating} />
        <div className="mt-5 flex justify-between items-center">
          <p className="text-black  font-bold text-lg">
            <sup>$</sup>
            <span>{product.price}</span>
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"
          >
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
