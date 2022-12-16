import React from 'react'

const Nut = ({ lineThick, nutHeight, width }) => {
  return (
    <line
      className='ChordNut'
      stroke='#000000'
      y1={-lineThick - 1}
      y2={-lineThick - 1}
      x1={nutHeight / 2}
      x2={width - (lineThick / 2)}
      strokeWidth={nutHeight}
      strokeLinecap='round'
    />
  )
}

export default Nut
