import React from 'react'
import { settings } from './settings'

const Markers = ({ hasNut, height, isSquared, leftHanded, lineDeflect, frets, mutedStringHeight, radius, strings, totalFrets, xBase, yBase }) => {
  const fretsHanded = !leftHanded ? frets : frets.slice().reverse()
  const fretReference = hasNut ? 0 : Math.min(...frets.filter(marker => marker > 0))
  const maxMarker = Math.max(...frets.filter(marker => marker >= 0))
  const markerDeflect = hasNut ? 0 : maxMarker - totalFrets
  const mutedStringHalfHeight = mutedStringHeight / 2
  const mutedStringY1 = height - mutedStringHalfHeight + lineDeflect
  const mutedStringY2 = height + mutedStringHalfHeight + lineDeflect

  const getComponents = () => {
    const className = 'ChordMarker'
    const components = []

    fretsHanded.map((value, index) => {
      const cx = (xBase * index) + lineDeflect

      if (!isNaN(value)) {
        const markerValue = value - markerDeflect

        if (markerValue > 0 && index < strings) {
          const cy = (markerValue * yBase) - (yBase / 2) + lineDeflect
          const squareSide = radius * 2
          const squareSideReduction = squareSide / 2
          const markKey = `mark${index}`

          components.push(
            !isSquared ? <circle
              className={className}
              key={markKey}
              cx={cx}
              cy={cy}
              r={radius}
            /> : <rect
              className={className}
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
                key={`reference${index}`}
                className='ChordFretReference'
                x={cx - 2}
                y={cy + (settings.fretReferenceHeight / 4)}
              >
                {fretReference}
              </text>
            )
          }
        }
      } else if (typeof value === 'string' && value.toLowerCase() === settings.mutedValue) {
        const mutedStringX1 = cx - mutedStringHalfHeight
        const mutedStringX2 = cx + mutedStringHalfHeight

        components.push(
          <g className='ChordStringMutted' key={`mute${index}`}>
            <line x1={mutedStringX1} y1={mutedStringY1} x2={mutedStringX2} y2={mutedStringY2} />
            <line x1={mutedStringX1} y1={mutedStringY2} x2={mutedStringX2} y2={mutedStringY1} />
          </g>
        )
      }
    })

    return components
  }

  return (
    <g className='ChordMarkers'>
      {getComponents()}
    </g>
  )
}

export default React.memo(Markers)
