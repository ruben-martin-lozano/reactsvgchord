import React, {useEffect, useState} from 'react'
import cx from 'classnames'
import ChordName from './chordName'
import FretBoard from './fretBoard'
import Markers from './markers'
import Nut from './nut'
import { settings } from './settings'

const { fretBoardHeight, fretBoardWidth, initialPosition, nameHeight, circleDeflect, squareDeflect, mutedStringHeight, thinLine, thickLine } = settings

const Chord = ({chord, isSquared = false, hideName = false, leftHanded = false, isThick = false, totalFrets = 4}) => {
  const {name, positions = []} = chord
  const [position, setPosition] = useState(initialPosition)
  const frets = positions[position]
  const lineThick = !isThick ? thinLine : thickLine

  useEffect(() => setPosition(initialPosition), [chord])

  if (!positions.length || !name || !frets) return null

  const onChordClick = () => {
    const newPosition = position !== (positions.length - 1) ? position + 1 : 0

    position !== newPosition && setPosition(newPosition)
  }

  const strings = frets.length
  const xBase = fretBoardWidth / (strings - 1)
  const yBase = fretBoardHeight / totalFrets
  const radius = (fretBoardWidth / strings) / 2
  const lineDeflect = lineThick / 2
  const nutHeight = lineThick * 3
  const hasNut = !frets.some(marker => marker > totalFrets)
  const nutY = -nutHeight + 1
  const chordNameHeight = !hideName ? nameHeight : 0
  const viewBox = {
    height: fretBoardHeight + nutHeight + chordNameHeight + (mutedStringHeight / 2) + lineThick - 1,
    width: fretBoardWidth + (radius * 2) + (lineDeflect / 4),
    x: -radius + lineDeflect,
    y: nutY - chordNameHeight
  }
  const className = cx('Chord', {
    'Chord--squared': isSquared,
    'Chord--thick': isThick
  })
  const parsedRadius = radius * (!isSquared ? circleDeflect : squareDeflect)

  return (
    <svg
      className={className}
      onClick={onChordClick}
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
    >
      {!hideName && <ChordName
        height={chordNameHeight}
        name={name}
        viewBox={viewBox}
      />}
      {hasNut && <Nut
        lineThick={lineThick}
        nutHeight={nutHeight}
        width={fretBoardWidth}
      />}
      <FretBoard
        hasNut={hasNut}
        height={fretBoardHeight}
        lineThick={lineThick}
        strings={strings}
        totalFrets={totalFrets}
        width={fretBoardWidth}
        xBase={xBase}
        yBase={yBase}
      />
      <Markers
        hasNut={hasNut}
        height={fretBoardHeight}
        isSquared={isSquared}
        leftHanded={leftHanded}
        lineDeflect={lineDeflect}
        frets={frets}
        mutedStringHeight={mutedStringHeight}
        radius={parsedRadius}
        strings={strings}
        totalFrets={totalFrets}
        xBase={xBase}
        yBase={yBase}
      />
    </svg>
  )
}

export default React.memo(Chord)
