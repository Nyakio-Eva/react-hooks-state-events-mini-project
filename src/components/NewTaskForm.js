import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit, }) {
  const [text, setText] = useState("");
  const [selectedCategory , setSelectedCategory ] = useState("")
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text || !selectedCategory) return; //don't add task if title or category is empty
    onTaskFormSubmit({text, category: selectedCategory})
    setText("")
    setSelectedCategory("")
  }
  const handleTextChange = (event) =>{
    setText(event.target.value);
  }
  const handleCategoryChange =(event) =>{
    setSelectedCategory(event.target.value)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
         type="text" 
         name="text" 
         value={text}
         onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="" disabled></option>
          {categories.map((category)=>(
            category !== "All" && (
              <option key={category} value={category}> {category}</option>
            )
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
