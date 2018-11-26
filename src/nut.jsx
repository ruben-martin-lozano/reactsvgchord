import React from 'react'
import PropTypes from 'prop-types'

const Nut = ({ lineThick, nutHeight, width }) => {
  const nutY = -nutHeight + 1

  return (
    <rect
      className='ChordNut'
      height={nutHeight}
      width={width + lineThick}
      x={0}
      y={nutY}
    />
  )
}

Nut.propTypes = {
  lineThick: PropTypes.number.isRequired,
  nutHeight: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Nut
