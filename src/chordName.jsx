import React from 'react'

const ChordName = ({ height, name, viewBox }) => {
  const {x, width} = viewBox
  const chordNameX = (width / 2) + x
  const chordNameY = -height / 2

  return (
    <text
      className='ChordName'
      x={chordNameX}
      y={chordNameY}
    >
      {name}
    </text>
  )
}

export default React.memo(ChordName)
