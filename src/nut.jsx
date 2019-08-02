import React from 'react'
import PropTypes from 'prop-types'

const Nut = ({ lineThick, nutHeight, width }) => {
  return (
    <line
      stroke='#000000'
      y1={-lineThick}
      y2={-lineThick}
      x1={nutHeight / 2}
      x2={width - (lineThick / 2)}
      strokeWidth={nutHeight}
      strokeLinecap='round'
    />
  )
}

Nut.propTypes = {
  lineThick: PropTypes.number.isRequired,
  nutHeight: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Nut
