import React, { useState } from "react";

function CategoryFilter({categories,selectedCategoory, onSelectedCategory}) {
  //state for selected category
  const[selected, setSelected] = useState(selectedCategoory);
  
  if(!Array.isArray(categories) ){
    console.log("list is not a category")
  }

  const handleCategoryClick = (category) => {
    //update state
    setSelected(category);
    
    //pass selected category back to parent
    onSelectedCategory(category);
  };

  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>(

        <button 
         key={category}
         className={selected === category ? "selected" : ""}
         onClick={() => handleCategoryClick(category)}
        >
         {category}
        </button>

        
  
      
      ))}
    </div>
  );
}

export default CategoryFilter;
