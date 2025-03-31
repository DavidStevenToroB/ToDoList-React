import React from 'react'
import './Section.css'

export const Section = ({style}) => {
   return (
      <section className={style}>
         <h2 id='h2Section1'>Create Task</h2>
         <input className='inputs' type="text" placeholder='Title...' />
         <input className='inputs' id='description' type="text" placeholder='Description...' />
         <input className='btnAdd' type="button" value="Add" />
      </section>
   )
}

