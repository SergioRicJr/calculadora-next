import React from 'react'

const Button = ({colSpan, simbol, bgColor, onClick,rest}: {colSpan: string, simbol: string|number, bgColor: string, onClick: (e: any)=>void, rest?: string}) => {
  return (
    <button className={`${colSpan} border-2 border-gray-700 ${bgColor} ${rest}`} value={simbol} onClick={onClick}>
      {simbol}
    </button>
  )
}

export default Button
