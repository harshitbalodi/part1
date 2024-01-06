import React from 'react'
import Part from './Part';

const Content = ({parts}) => {
  console.log(parts);
  return (
    <div>
      {
        parts.map((part,i)=>{
        return  <Part part={part} key={i} />
        }
        )    
      }
    </div>
  )
}

export default Content