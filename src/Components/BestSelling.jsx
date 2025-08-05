import { useState } from "react";
import { NavLink } from "react-router";

const BestSelling = () => {
  const products = [
    {
      id: 1,
      name: "Modern Sofa",
      category: "Furniture",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Office Chair",
      category: "Furniture",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Wall Lamp",
      category: "Lighting",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Ceiling Light",
      category: "Lighting",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Wooden Table",
      category: "Wood",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Bookshelf",
      category: "Wood",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Canvas Art",
      category: "Decor",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Vase",
      category: "Decor",
      image: "https://via.placeholder.com/150",
    },
  ];

  const categories = [...new Set(products.map((p) => p.category))];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="lg:my-20 md:my-16 sm:my-12 my-8 bg-gray-200 h-screen py-10">
      <div className="text-center py-4">
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">
          Best Selling Product
        </h2>
      </div>
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover"
              loading="lazy"
            />
            <div className="p-3">
              <h4 className="text-sm font-semibold">{product.name}</h4>
              <p className="text-xs text-gray-500">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
