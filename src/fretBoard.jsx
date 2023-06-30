import React from 'react'
import { settings } from './settings'

const FretBoard = ({ hasNut, height, isFile, isSquared, lineThick, strings, totalFrets, width, xBase, yBase }) => {
  const components = []
  const lineDeflect = lineThick / 2
  const { styles, fretBoardReduction } = settings
  const stringHeight = height + lineDeflect - fretBoardReduction
  const fretWidth = width + lineDeflect - fretBoardReduction
  const x1 = lineDeflect + fretBoardReduction
  const y1 = hasNut ? -lineThick - 1 : lineDeflect
  const stroke = !isFile ? null : styles.defaultColor
  const strokeWidth = !isFile ? null : lineThick
  const strokeLinecap = !isFile ? null : !isSquared ? 'round' : 'square'

  for (let i = 0; i <= totalFrets; i++) {
    const y = (yBase * i) + lineDeflect

    components.push(
      <line
        key={`fret${i}`}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
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
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        x1={x}
        x2={x}
        y1={y1}
        y2={stringHeight}
      />
    )
  }

  return components
}

export default React.memo(FretBoard)
