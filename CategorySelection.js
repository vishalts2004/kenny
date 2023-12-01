import React from "react";

const CategorySelection = ({ categories, setSelectedCategory }) => {
  return (
    <div className="CategorySelection">
      <h4>SELECT YOUR CATEGORY FOR QUIZ</h4>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
