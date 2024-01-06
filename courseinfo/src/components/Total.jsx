import React from 'react'

const Total = ({parts}) => {
  console.log(parts);

  const total=parts.reduce((acc,ele)=>{
    return acc+ele.exercises;
  },0)
  return (
    <div>Number of exercises {total}</div>
  )
}

export default Total