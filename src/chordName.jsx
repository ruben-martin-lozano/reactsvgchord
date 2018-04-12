import React from 'react'
import PropTypes from 'prop-types'

const ChordName = ({ colors, height, name, viewBox }) => {
  const chordNameX = (viewBox.width / 2) + viewBox.x
  const chordNameY = -height / 2

  return (
    <text
      className='sb-ChordName'
      textAnchor='middle'
      x={chordNameX}
      y={chordNameY}
      fill={colors.chordName}
    >
      {name}
    </text>
  )
}

ChordName.propTypes = {
  colors: PropTypes.shape({
    chordName: PropTypes.string.isRequired
  }).isRequired,
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  viewBox: PropTypes.object.isRequired
}

export default ChordName
