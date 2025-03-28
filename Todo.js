import React from "react";
import {useEffect,useState} from "react";
import "./index.css"

function Todo() {

    const [task,setTask]=useState("");
    const [taskIndex,setTaskIndex]=useState(null)
    const [taskList,setTaskList]=useState([]);


    const handleChange =(val) =>{
        setTask(val);     
    }

    const handleAdd = () =>{

        if(taskIndex !== null){
         //new array named updated list will have task list items and handle updates
           updatedList = [...taskList];
           updatedList[taskIndex] = task;
           setTaskList(updatedList);
            setTaskIndex(null);
            setTask("")
        }
        else if(task){
            setTaskList([...taskList,task])
            console.log(taskList) ; 
            setTask("")
        }   

    }

    const handleEdit =(itemIndex) =>{
       setTask(taskList[itemIndex]);
       setTaskIndex(itemIndex);
    }

    const handleDelete =(itemIndex) =>{       
        console.log(itemIndex);
        //new array named updated list will have task list items and handle updates
        const updatedList=taskList.filter((item,index)=>{
            if(index != itemIndex){
                return true;
            }
        })
        setTaskList([updatedList]);
    }

  return(
    <>
    <div className="Todo">
    <h2>1) Hello Todo</h2>
    <input type="text" value={task} onChange={(e)=>handleChange(e.target.value)} placeholder="Enter Task"/>
    <button onClick={handleAdd}>
        {taskIndex == null ? "Add" : "Update"}
    </button>
    <ul className="List-Item">
    {taskList && taskList.map((item,index)=>(
        <li key={index}>
       
        {item} 
        <button onClick={()=>handleEdit(index)}>Edit</button>
        <button onClick={()=>handleDelete(index)}>Delete</button>      
        </li>
    ))}
    </ul>
    
    </div>
    </>
  )   
}

export default Todo;
