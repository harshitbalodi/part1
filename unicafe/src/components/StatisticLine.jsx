import React from 'react'

const StatisticLine = ({text,data, children}) => {
  return (
    <tr>
        <td> {text} </td>
        <td> {data}{children}</td>
    </tr>
  )
}

export default StatisticLine
