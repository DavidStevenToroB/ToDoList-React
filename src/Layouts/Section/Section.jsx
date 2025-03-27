import React from 'react'
import './Section.css'

export const Section = ({style}) => {
   return (
      <section className={style}>
         <h2>Create Task</h2>
         <input className='inputs' type="text" placeholder='Title...' />
         <input className='inputs' id='description' type="text" placeholder='Description...' />
         <input className='btnAdd' type="button" value="Add" />
      </section>
   )
}

