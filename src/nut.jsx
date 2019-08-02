import React from 'react'
import PropTypes from 'prop-types'

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

Nut.propTypes = {
  lineThick: PropTypes.number.isRequired,
  nutHeight: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Nut
