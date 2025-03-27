import { Section } from "../Section/Section"
import { DivFilters } from "../DivFilters/DivFilters"
import React from 'react'
import './Main.css'

export const Main = () => {

   return (
      <main>
         <Section style={'section-one'} />
         <section className="section-two">
            <DivFilters style={'filters'} />
            <div id="card">
               <input className='inputCheckBox' type="checkbox" />
               <h3>Title</h3>
               <h4>Description</h4>
            </div>
         </section>
      </main>
   )
}

