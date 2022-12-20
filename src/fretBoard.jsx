import React from 'react'
import { settings } from './settings'

const FretBoard = ({ hasNut, height, lineThick, strings, totalFrets, width, xBase, yBase }) => {
  const getComponents = () => {
    const components = []
    const lineDeflect = lineThick / 2
    const { fretBoardReduction } = settings
    const stringHeight = height + lineDeflect - fretBoardReduction
    const fretWidth = width + lineDeflect - fretBoardReduction
    const x1 = lineDeflect + fretBoardReduction
    const y1 = hasNut ? -lineThick - 1 : lineDeflect

    for (let i = 0; i <= totalFrets; i++) {
      const y = (yBase * i) + lineDeflect

      components.push(
        <line
          key={`fret${i}`}
          x1={x1}
          x2={fretWidth}
          y1={y}
          y2={y}
        />
      )
    }

    for (let i = 0; i < strings; i++) {
      const x = (xBase * i) + lineDeflect

      components.push(
        <line
          key={`string${i}`}
          x1={x}
          x2={x}
          y1={y1}
          y2={stringHeight}
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

export default React.memo(FretBoard)
