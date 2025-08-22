import React, { useState } from "react";
import { products } from "../utility/products";
import ProductCart from "../Pages/ProductCart";

const Products = ({ headline }) => {
  const categories = ["chair", "beds", "sofa", "lamp"];
  const [selectedCategory, setSelectedCategory] = useState("chair");

  const [visibleProducts, setVisibleProducts] = useState(4);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === selectedCategory.toLowerCase()
  );
  return (
    <div>
      <div>
        <h2 className="4xl font-bold text-center my-8">{headline}</h2>
        {/* category */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 my-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {categories.map((category, index) => (
              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProducts(4);
                }}
                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-yellow-600 cursor-pointer hover:text-white transition-colors ${
                  selectedCategory === category
                    ? "bg-yellow-600 text-white"
                    : "bg-transparent text-black"
                }`}
                key={index}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
        </div>
        {/* load more button */}
        {visibleProducts < filteredProducts.length && (
          <div className="text-center my-8">
            <button
              onClick={loadMoreProducts}
              className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition-colors cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
