import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ChordName from './chordName'
import FretBoard from './fretBoard'
import Markers from './markers'
import Nut from './nut'

const fretBoardHeight = 220
const fretBoardWidth = 150
const lineThick = 4
const totalFrets = 4

const Chord = ({ inverse, leftHanded, chord, colors }) => {
  const {name, frets} = chord

  if (!frets || !frets.length || !name) return null

  const strings = frets.length
  const xBase = fretBoardWidth / (strings - 1)
  const yBase = fretBoardHeight / totalFrets
  const radius = (fretBoardWidth / strings) / 2
  const lineDeflect = lineThick / 2
  const nutHeight = lineThick * 3
  const hasNut = !frets.some(marker => marker > totalFrets)
  const nutY = -nutHeight + 1
  const chordNameHeight = 55
  const mutedStringHeight = 20
  const viewBox = {
    height: fretBoardHeight + nutHeight + chordNameHeight + (mutedStringHeight / 2) + lineThick - 1,
    width: fretBoardWidth + (radius * 2) + (lineDeflect / 4),
    x: -radius + lineDeflect,
    y: nutY - chordNameHeight
  }
  const baseClassName = cx('sb-Chord', {
    'sb-Chord--inverse': inverse
  })

  return (
    <svg className={baseClassName} viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
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
        height={fretBoardHeight}
        lineThick={lineThick}
        strings={strings}
        totalFrets={totalFrets}
        width={fretBoardWidth}
        xBase={xBase}
        yBase={yBase} />
      <Markers
        colors={colors}
        hasNut={hasNut}
        height={fretBoardHeight}
        leftHanded={leftHanded}
        lineDeflect={lineDeflect}
        lineThick={lineThick}
        frets={frets}
        mutedStringHeight={mutedStringHeight}
        radius={radius}
        strings={strings}
        totalFrets={totalFrets}
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
  },
  inverse: false,
  leftHanded: false
}

Chord.propTypes = {
  colors: PropTypes.shape({
    chordName: PropTypes.string.isRequired,
    fretBoard: PropTypes.string.isRequired,
    marker: PropTypes.string.isRequired,
    mutedString: PropTypes.string.isRequired,
    nut: PropTypes.string.isRequired,
    fretReference: PropTypes.string.isRequired
  }),
  chord: PropTypes.shape({
    name: PropTypes.string.isRequired,
    frets: PropTypes.array.isRequired
  }).isRequired,
  inverse: PropTypes.bool,
  leftHanded: PropTypes.bool
}

export default Chord
