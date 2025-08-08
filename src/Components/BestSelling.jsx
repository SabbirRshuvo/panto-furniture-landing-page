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

  const [selectedProduct, setSelectedProduct] = useState(categories[0]);

  const filteredProduct = products.filter(
    (product) => product.category === selectedProduct
  );

  return (
    <div className="bg-gray-200 h-[500px]">
      <h2 className="text-center pt-10 lg:text-4xl md:text-3xl text-2xl  font-semibold ">
        Best Selling Product
      </h2>
      <div className="text-center my-10 flex gap-4 items-center justify-center">
        {/* category section */}

        {categories.map((category) => (
          <button
            onClick={() => setSelectedProduct(category)}
            key={category.id}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        {/* products section */}
        {filteredProduct.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
      <div>{/* all products section */}</div>
    </div>
  );
};

export default BestSelling;
