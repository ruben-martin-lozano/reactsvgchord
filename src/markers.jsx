import React from 'react'
import PropTypes from 'prop-types'

const mutedValue = 'x'
const fretReferenceHeight = 25
const radiusReduction = .9

const Markers = ({ hasNut, height, leftHanded, lineDeflect, lineThick, frets, mutedStringHeight, radius, strings, totalFrets, xBase, yBase }) => {
  const fretsHanded = !leftHanded ? frets : frets.slice().reverse()
  const fretReference = hasNut ? 0 : Math.min(...frets.filter(marker => marker > 0))
  const maxMarker = Math.max(...frets.filter(marker => marker >= 0))
  const markerDeflect = hasNut ? 0 : maxMarker - totalFrets
  const mutedStringHalfHeight = mutedStringHeight / 2
  const mutedStringY1 = height - mutedStringHalfHeight + lineDeflect
  const mutedStringY2 = height + mutedStringHalfHeight + lineDeflect

  const getComponents = () => {
    const components = []

    fretsHanded.map((value, index) => {
      const cx = (xBase * index) + lineDeflect

      if (!isNaN(value)) {
        const markerValue = value - markerDeflect

        if (markerValue > 0 && index < strings) {
          const cy = (markerValue * yBase) - (yBase / 2) + lineDeflect

          components.push(
            <circle
              className='ChordMarker'
              key={`mark${index}`}
              cx={cx}
              cy={cy}
              r={radius * radiusReduction}
            />
          )

          if (fretReference && value === fretReference) {
            components.push(
              <text
                key={`reference${index}`}
                className='ChordFretReference'
                fill='white'
                textAnchor='middle'
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
          <g className='ChordStringMutted' key={`mute${index}`}>
            <line stroke='#000000' x1={mutedStringX1} y1={mutedStringY1} x2={mutedStringX2} y2={mutedStringY2} strokeWidth={lineThick} strokeLinecap='round' />
            <line stroke='#000000' x1={mutedStringX1} y1={mutedStringY2} x2={mutedStringX2} y2={mutedStringY1} strokeWidth={lineThick} strokeLinecap='round' />
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

Markers.propTypes = {
  hasNut: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  leftHanded: PropTypes.bool,
  lineDeflect: PropTypes.number.isRequired,
  lineThick: PropTypes.number.isRequired,
  frets: PropTypes.array.isRequired,
  mutedStringHeight: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  totalFrets: PropTypes.number.isRequired,
  xBase: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Markers
