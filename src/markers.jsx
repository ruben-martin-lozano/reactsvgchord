import React, { Fragment } from 'react'
import { settings } from './settings'

const Markers = ({ hasNut, height, isFile, isSquared, leftHanded, lineDeflect, lineThick, frets, mutedStringHeight, radius, strings, totalFrets, xBase, yBase }) => {
  const fretsHanded = !leftHanded ? frets : frets.slice().reverse()
  const fretReference = hasNut ? 0 : Math.min(...frets.filter(marker => marker > 0))
  const maxMarker = Math.max(...frets.filter(marker => marker >= 0))
  const markerDeflect = hasNut ? 0 : maxMarker - totalFrets
  const mutedStringHalfHeight = mutedStringHeight / 2
  const mutedStringY1 = height - mutedStringHalfHeight + lineDeflect
  const mutedStringY2 = height + mutedStringHalfHeight + lineDeflect
  const { fretReferenceHeight, mutedValue, styles } = settings
  const referenceClassName = !isFile ? 'ChordFretReference' : null
  const fill = !isFile ? null : styles.inverseColor
  const fontFamily = !isFile ? null : styles.fontFamily
  const fontSize = !isFile ? null : '1.2em'
  const fontStyle = !isFile ? null : 'italic'
  const fontWeight = !isFile ? null : styles.fontWeight
  const textAnchor = !isFile ? null : styles.textAnchor
  const stroke = !isFile ? null : styles.defaultColor
  const strokeWidth = !isFile ? null : lineThick
  const strokeLinecap = !isFile ? null : !isSquared ? 'round' : 'square'
  const components = []

  fretsHanded.forEach((value, index) => {
    const cx = (xBase * index) + lineDeflect

    if (!isNaN(value)) {
      const markerValue = value - markerDeflect

      if (markerValue > 0 && index < strings) {
        const cy = (markerValue * yBase) - (yBase / 2) + lineDeflect
        const squareSide = radius * 2
        const squareSideReduction = squareSide / 2
        const markKey = `mark${index}`

        components.push(
          !isSquared
            ? <circle
                key={markKey}
                cx={cx}
                cy={cy}
                r={radius}
              />
            : <rect
                key={markKey}
                x={cx - squareSideReduction}
                y={cy - squareSideReduction}
                height={squareSide}
                width={squareSide}
              />
        )

        if (fretReference && value === fretReference) {
          components.push(
            <text
              fill={fill}
              fontFamily={fontFamily}
              fontSize={fontSize}
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textAnchor={textAnchor}
              key={`reference${index}`}
              className={referenceClassName}
              x={cx - 2}
              y={cy + (fretReferenceHeight / 4)}
            >
              {fretReference}
            </text>
          )
        }
      }
    } else if (typeof value === 'string' && value.toLowerCase() === mutedValue) {
      const mutedStringX1 = cx - mutedStringHalfHeight
      const mutedStringX2 = cx + mutedStringHalfHeight

      components.push(
        <Fragment key={`mute${index}`}>
          <line stroke={stroke} strokeLinecap={strokeLinecap} strokeWidth={strokeWidth} x1={mutedStringX1} y1={mutedStringY1} x2={mutedStringX2} y2={mutedStringY2} />
          <line stroke={stroke} strokeLinecap={strokeLinecap} strokeWidth={strokeWidth} x1={mutedStringX1} y1={mutedStringY2} x2={mutedStringX2} y2={mutedStringY1} />
        </Fragment>
      )
    }
  })

  return components
}

export default React.memo(Markers)
