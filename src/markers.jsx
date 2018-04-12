import React from 'react'
import PropTypes from 'prop-types'

const mutedValue = 'x'
const fretReferenceHeight = 25

const Markers = ({ colors, frets, hasNut, height, leftHanded, lineDeflect, lineThick, markers, mutedStringHeight, radius, strings, xBase, yBase }) => {
  const markersHanded = !leftHanded ? markers : markers.slice().reverse()
  const fretReference = hasNut ? 0 : Math.min(...markers.filter(marker => marker > 0))
  const maxMarker = Math.max(...markers.filter(marker => marker >= 0))
  const markerDeflect = hasNut ? 0 : maxMarker - frets
  const mutedStringHalfHeight = mutedStringHeight / 2
  const mutedStringY1 = height - mutedStringHalfHeight + lineDeflect
  const mutedStringY2 = height + mutedStringHalfHeight + lineDeflect

  const getComponents = () => {
    const components = []

    markersHanded.map((value, index) => {
      const cx = (xBase * index) + lineDeflect

      if (!isNaN(value)) {
        const markerValue = value - markerDeflect

        if (markerValue > 0 && index < strings) {
          const cy = (markerValue * yBase) - (yBase / 2) + lineDeflect

          components.push(
            <circle
              fill={colors.marker}
              key={`mark${index}`}
              cx={cx}
              cy={cy}
              r={radius}
            />
          )

          if (fretReference && value === fretReference) {
            components.push(
              <text
                key={`reference${index}`}
                className='sb-ChordFretReference'
                fill={colors.fretReference}
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
          <g className='sb-ChordStringMutted' key={`mute${index}`} stroke={colors.mutedString}>
            <line x1={mutedStringX1} y1={mutedStringY1} x2={mutedStringX2} y2={mutedStringY2} strokeWidth={lineThick} strokeLinecap='round' />
            <line x1={mutedStringX1} y1={mutedStringY2} x2={mutedStringX2} y2={mutedStringY1} strokeWidth={lineThick} strokeLinecap='round' />
          </g>
        )
      }
    })

    return components
  }

  return (
    <g className='sb-ChordMarkers'>
      {getComponents()}
    </g>
  )
}

Markers.propTypes = {
  colors: PropTypes.shape({
    marker: PropTypes.string.isRequired,
    mutedString: PropTypes.string.isRequired,
    fretReference: PropTypes.string.isRequired
  }).isRequired,
  frets: PropTypes.number.isRequired,
  hasNut: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  leftHanded: PropTypes.bool,
  lineDeflect: PropTypes.number.isRequired,
  lineThick: PropTypes.number.isRequired,
  markers: PropTypes.array.isRequired,
  mutedStringHeight: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  xBase: PropTypes.number.isRequired,
  yBase: PropTypes.number.isRequired
}

export default Markers
