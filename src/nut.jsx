import React from 'react'

const Nut = ({ lineThick, nutHeight, width }) => {
  const y = -lineThick - 1
  const lineDeflect = lineThick / 2

  return (
    <line
      className='ChordNut'
      y1={y}
      y2={y}
      x1={nutHeight / 2}
      x2={width - lineDeflect}
      strokeWidth={nutHeight}
    />
  )
}

export default React.memo(Nut)
