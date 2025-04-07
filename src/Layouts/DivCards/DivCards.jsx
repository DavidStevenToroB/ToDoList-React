import React from 'react'
const tasks = [
   {"title": "newTarea", "description": "esta es una tarea de prueva" },
   {"title": "newTarea2", "description": "esta es una tarea de prueva2" }
]

const createCard = (task) => {
   const card = document.getElementById('card')


   const  inputCheckBox = document.createElement('input')
   inputCheckBox.type = 'checkbox'
   inputCheckBox.className = 'inputCheckBox'

   const titleCard = document.createElement('h3')
   titleCard.textContent = task.title

   const descriptionCard = document.createElement('h4')
   descriptionCard.textContent = task.description


      card.appendChild(inputCheckBox)
      card.appendChild(titleCard)
      card.appendChild(descriptionCard)
}

const createTask = (title, description) => {
   let newTask = {
      "title": title, "description": description
   }

   tasks.push(newTask)
}

export const DivCards = ({contentTitle, contentDescription}) => {
   
   createTask({contentTitle, contentDescription})
   tasks.forEach(task => 
      createCard(task)
   )
   

   return (
      <div id="card">
         <input className='inputCheckBox' type="checkbox" />
         <h3>Title</h3>
         <h4>Description</h4>
      </div>
   )
}

 
