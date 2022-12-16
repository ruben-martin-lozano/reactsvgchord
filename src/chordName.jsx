import React from 'react'

const ChordName = ({ height, name, viewBox }) => {
  const chordNameX = (viewBox.width / 2) + viewBox.x
  const chordNameY = -height / 2

  return (
    <text
      className='ChordName'
      textAnchor='middle'
      x={chordNameX}
      y={chordNameY}
    >
      {name}
    </text>
  )
}

export default ChordName
