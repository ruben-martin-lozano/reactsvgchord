import React from 'react'
import PropTypes from 'prop-types'

const Nut = ({ colors, lineThick, nutHeight, width }) => {
  const nutY = -nutHeight + 1

  return (
    <rect
      className='sb-ChordNut'
      height={nutHeight}
      width={width + lineThick}
      x={0}
      y={nutY}
      fill={colors.nut}
    />
  )
}

Nut.propTypes = {
  colors: PropTypes.shape({
    nut: PropTypes.string.isRequired
  }).isRequired,
  lineThick: PropTypes.number.isRequired,
  nutHeight: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Nut
