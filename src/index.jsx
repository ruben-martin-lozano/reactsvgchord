import React from 'react'
import PropTypes from 'prop-types'
import ChordName from './chordName.jsx'
import FretBoard from './fretBoard.jsx'
import Markers from './markers.jsx'
import Nut from './nut.jsx'

const fretBoardHeight = 220
const fretBoardWidth = 150
const lineThick = 4
const frets = 4

const Chord = ({ inverse, leftHanded, chord, colors }) => {
  const {name, markers} = chord

  if (!markers || !markers.length || !name) return null

  const strings = markers.length
  const xBase = fretBoardWidth / (strings - 1)
  const yBase = fretBoardHeight / frets
  const radius = (fretBoardWidth / strings) / 2
  const lineDeflect = lineThick / 2
  const nutHeight = lineThick * 3
  const hasNut = !markers.some(marker => marker > frets)
  const nutY = -nutHeight + 1
  const chordNameHeight = 55
  const mutedStringHeight = 20
  const viewBox = {
    height: fretBoardHeight + nutHeight + chordNameHeight + (mutedStringHeight / 2) + lineThick - 1,
    width: fretBoardWidth + (radius * 2) + (lineDeflect / 4),
    x: -radius + lineDeflect,
    y: nutY - chordNameHeight
  }

  return (
    <svg className='sb-Chord' viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
      <ChordName
        colors={colors}
        height={chordNameHeight}
        name={name}
        viewBox={viewBox} />
      {hasNut && <Nut
        colors={colors}
        lineThick={lineThick}
        nutHeight={nutHeight}
        width={fretBoardWidth}
      />}
      <FretBoard
        colors={colors}
        frets={frets}
        height={fretBoardHeight}
        lineThick={lineThick}
        strings={strings}
        width={fretBoardWidth}
        xBase={xBase}
        yBase={yBase} />
      <Markers
        colors={colors}
        frets={frets}
        hasNut={hasNut}
        height={fretBoardHeight}
        leftHanded={leftHanded}
        lineDeflect={lineDeflect}
        lineThick={lineThick}
        markers={markers}
        mutedStringHeight={mutedStringHeight}
        radius={radius}
        strings={strings}
        xBase={xBase}
        yBase={yBase} />
    </svg>
  )
}

Chord.defaultProps = {
  colors: {
    chordName: '#000000',
    fretBoard: '#000000',
    marker: '#000000',
    mutedString: '#000000',
    nut: '#000000',
    fretReference: '#ffffff'
  }
}

Chord.propTypes = {
  inverse: PropTypes.bool,
  leftHanded: PropTypes.bool,
  chord: PropTypes.shape({
    name: PropTypes.string.isRequired,
    markers: PropTypes.array.isRequired
  }).isRequired,
  colors: PropTypes.shape({
    chordName: PropTypes.string.isRequired,
    fretBoard: PropTypes.string.isRequired,
    marker: PropTypes.string.isRequired,
    mutedString: PropTypes.string.isRequired,
    nut: PropTypes.string.isRequired,
    fretReference: PropTypes.string.isRequired
  })
}

export default Chord
