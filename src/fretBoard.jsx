import React from 'react'
import PropTypes from 'prop-types'

const FretBoard = ({ hasNut, height, lineThick, strings, totalFrets, width, xBase, yBase }) => {
  const getComponents = () => {
    const components = []
    const stringHeight = height + (lineThick / 2)
    const fretWidth = width + (lineThick / 2)

    // Frets.
    for (let i = 0; i <= totalFrets; i++) {
      const y = yBase * i + (lineThick / 2)

      components.push(
        <line
          key={`fret${i}`}
          stroke='#000000'
          x1={lineThick / 2}
          x2={fretWidth}
          y1={y}
          y2={y}
          strokeWidth={lineThick}
          strokeLinecap='round'
        />
      )
    }

    for (let i = 0; i < strings; i++) {
      const x = (xBase * i) + (lineThick / 2)
      const y1 = hasNut ? -lineThick - 1 : lineThick / 2

      components.push(
        <line
          key={`string${i}`}
          stroke='#000000'
          x1={x}
          x2={x}
          y1={y1}
          y2={stringHeight - 0.5}
          strokeWidth={lineThick}
          strokeLinecap='round'
        />
      )
    }

    return components
  }

  return (
    <g className='ChordFretBoard'>
      {getComponents()}
    </g>
  )
}

FretBoard.propTypes = {
  hasNut: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  lineThick: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  totalFrets: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  xBase: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default FretBoard
