import React, {useState} from "react";


function Task({onRemoveTask,text,category}) {
  const[isRemoved, setIsRemoved] = useState(false);
  
  const handleRemove = () =>{
    setIsRemoved(true);

    onRemoveTask({text,category});
  }

  if(isRemoved) return null;


  return (
    <div className="task">
      <div className="label" category={category}>{category}</div>
      <div className="text" text={text}> {text} </div>
      <button className="delete" onClick={handleRemove}>X</button>
    </div>
  );
}

export default Task;
