import React, { useState } from 'react'
import './DivCards.css'

const saveTasks = [
   { "title": "newTarea", "description": "esta es una tarea de prueva" },
   { "title": "newTarea2", "description": "esta es una tarea de prueva2" },
   { "title": "newTarea2", "description": "esta es una tarea de prueva2" },
   { "title": "newTarea2", "description": "esta es una tarea de prueva2" }
]

export const DivCards = () => {

   const [tasks, setTasks] = useState(saveTasks)


   return (
      <div id="card">
         {tasks.map((task, index) => (
            <div key={index} className="task-card">
               <input className="inputCheckBox" type="checkbox" />
               <h3>{task.title}</h3>
               <h4>{task.description}</h4>
            </div>
         ))}
      </div>
   )
}


