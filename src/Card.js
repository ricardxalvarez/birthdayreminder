import React, { useState } from "react"

const Card = ({img,name,age, clearPerson, id})=>{
    return(
      <div className='card-info'>
        <div className='person'>
          <img src={img} alt=""/>
            <div>  
              <h1>{name}</h1>
              <h1>{age}</h1>
            </div>
          <button onClick={()=> clearPerson(id)}>clear</button>
        </div>
      </div>
    )
}
export default Card