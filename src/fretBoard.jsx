import React from 'react'
import PropTypes from 'prop-types'

const FretBoard = ({ colors, frets, height, lineThick, strings, width, xBase, yBase }) => {
  const getComponents = () => {
    const components = []
    const stringHeight = height + lineThick
    const fretWidth = width + lineThick - 2

    // Frets.
    for (let i = 0; i <= frets; i++) {
      components.push(
        <rect
          key={`fret${i}`}
          x={1}
          y={yBase * i}
          width={fretWidth}
          height={lineThick}
        />
      )
    }

    // Strings.
    for (let i = 0; i < strings; i++) {
      components.push(
        <rect
          key={`string${i}`}
          x={xBase * i}
          y={0}
          width={lineThick}
          height={stringHeight}
        />
      )
    }

    return components
  }

  return (
    <g className='sb-ChordFretBoard' fill={colors.fretBoard}>
      {getComponents()}
    </g>
  )
}

FretBoard.propTypes = {
  colors: PropTypes.shape({
    fretBoard: PropTypes.string.isRequired
  }).isRequired,
  frets: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  lineThick: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  xBase: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default FretBoard
