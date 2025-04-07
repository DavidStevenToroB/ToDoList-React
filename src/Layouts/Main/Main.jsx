import { DivFilters } from "../DivFilters/DivFilters"
import { DivCards } from "../DivCards/DivCards"
import { Section } from "../Section/Section"
import React from 'react'
import './Main.css'

export const Main = () => {

   return (
      <main>
         <Section style={'section-one'} />
         <section className="section-two">
            <DivFilters style={'filters'} />
            <DivCards contentTitle={'tarea3'} contentDescription={'me da pereza'}/>
         </section>
      </main>
   )
}

