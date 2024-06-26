import Category from "./CategoriesCard";
import { useState } from "react";
import { useEffect } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/category')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, []);
  return (
    <div className="mb-12">
      <h1 className="text-2xl font-bold text-center my-12">Top Categories</h1>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
