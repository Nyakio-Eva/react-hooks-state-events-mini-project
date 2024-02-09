import React from "react";
import Task from "./Task";


function TaskList({tasks}) {
  console.log(tasks)

  if(!Array.isArray(tasks) ){
    console.log("list is not an array")
  }
  const handleRemoveTask = (taskToRemove) => {
    const updatedTaskList = tasks.filter((task) => task !== taskToRemove);
    console.log("Deleted task", updatedTaskList);
  };


  return (
    <div className="tasks">
      {tasks.map((task)=>(
        <Task key={task.text} text={task.text} category={task.category} onRemoveTask={() => handleRemoveTask(task)}/>
      ))}
     
    </div>
  );
}

export default TaskList;
