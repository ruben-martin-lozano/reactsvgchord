import React from 'react'
import { settings } from './settings'

const ChordName = ({ height, isFile, name, viewBox }) => {
  const { x, width } = viewBox
  const chordNameX = (width / 2) + x
  const chordNameY = -height / 2
  const className = !isFile ? 'ChordName' : null
  const { styles } = settings
  const fontFamily = !isFile ? null : styles.fontFamily
  const fontSize = !isFile ? null : '3em'
  const fontWeight = !isFile ? null : styles.fontWeight
  const textAnchor = !isFile ? null : styles.textAnchor

  return (
    <text
      className={className}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAnchor={textAnchor}
      x={chordNameX}
      y={chordNameY}
    >
      {name}
    </text>
  )
}

export default React.memo(ChordName)
