import React, { useState } from 'react'
import './Todo.css'

function Todo() {

    const [tasks,setTasks]=useState([])
    const [inputValue,setInputValue]=useState('')

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)

    }
    const handleSave=()=>{

        setTasks([...tasks,inputValue])

        setInputValue('')
    }
    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
      };

    return (
        
        <div className='container'>
            <div className='topContainer'>
                <h1 className=''>ToDo List
                </h1>
                <div className='inputDiv'><input type='text' id='todoInput' onChange={handleInputChange} placeholder='Add a new task' value={inputValue} />
                    <button type='button' onClick={handleSave}>Save</button></div>

            </div>

            <div className='bottomContainer'>
            <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
            </div>

        </div>

    )
}

export default Todo