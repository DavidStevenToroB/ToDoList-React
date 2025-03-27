import { ButtonFilter } from "../../assets/ButtonFilter/ButtonFilter";
import React from 'react'

export const DivFilters = ({ style }) => {
   return (
      <div className={style}>
         <ButtonFilter style={''} content={'All'}/>
         <ButtonFilter style={''} content={'Pending'}/>
         <ButtonFilter style={''} content={'Completed'}/>
      </div>
   )
}

