import React from 'react'
import { settings } from './settings'

const Nut = ({ isFile, isSquared, lineThick, nutHeight, width }) => {
  const y = -lineThick - 1
  const lineDeflect = lineThick / 2
  const { styles } = settings
  const stroke = !isFile ? null : styles.defaultColor
  const strokeWidth = !isFile ? null : nutHeight
  const strokeLinecap = !isFile ? null : !isSquared ? 'round' : 'square'
  const className = !isFile ? 'ChordNut' : null

  return (
    <line
      className={className}
      y1={y}
      y2={y}
      x1={nutHeight / 2}
      x2={width - lineDeflect}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
    />
  )
}

export default React.memo(Nut)
