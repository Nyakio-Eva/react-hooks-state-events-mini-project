import React from "react";
import NewTaskForm from "./NewTaskForm";

function CategoryFilter({categories,selectedCategoory, onSelectedCategory}) {
  
  if(!Array.isArray(categories) ){
    console.log("list is not a category")
  }

  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((task)=>(
        <button key={task.category}>{task.category}onClick={onSelectedCategory}{selectedCategoory}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
