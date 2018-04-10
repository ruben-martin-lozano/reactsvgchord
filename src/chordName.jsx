import React from 'react'
import PropTypes from 'prop-types'

const ChordName = ({ height, name, viewBox }) => {
  const chordNameX = (viewBox.width / 2) + viewBox.x
  const chordNameY = -height / 2

  return (
    <text className='sb-ChordName' textAnchor='middle' x={chordNameX} y={chordNameY}>
      {name}
    </text>
  )
}

ChordName.propTypes = {
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  viewBox: PropTypes.object.isRequired
}

export default ChordName
