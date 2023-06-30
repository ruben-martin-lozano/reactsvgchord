import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import ChordName from './chordName'
import FretBoard from './fretBoard'
import Markers from './markers'
import Nut from './nut'
import { settings } from './settings'

const { styles, fretBoardHeight, fretBoardWidth, initialPosition, nameHeight, circleDeflect, squareDeflect, mutedStringHeight, thinLine, thickLine } = settings

const Chord = ({ chord, hideName = false, isFile = false, isSquared = false, isThick = false, leftHanded = false, totalFrets = 4 }) => {
  const { name, positions = [] } = chord
  const [position, setPosition] = useState(initialPosition)
  const frets = positions[position]
  const lineThick = !isThick ? thinLine : thickLine

  useEffect(() => setPosition(initialPosition), [chord])

  if (!positions.length || !name || !frets) return null

  const onChordClick = !isFile
    ? () => {
        const newPosition = position !== (positions.length - 1) ? position + 1 : 0

        position !== newPosition && setPosition(newPosition)
      }
    : null

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
  const className = !isFile
    ? cx('Chord', {
      'Chord--squared': isSquared,
      'Chord--thick': isThick
    })
    : null
  const fill = !isFile ? null : styles.defaultColor
  const xmlns = !isFile ? null : 'http://www.w3.org/2000/svg'
  const parsedRadius = radius * (!isSquared ? circleDeflect : squareDeflect)

  return (
    <svg
      className={className}
      fill={fill}
      onClick={onChordClick}
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
      xmlns={xmlns}
    >
      {!hideName && <ChordName
        height={chordNameHeight}
        isFile={isFile}
        name={name}
        viewBox={viewBox}
                    />}
      {hasNut && <Nut
        isFile={isFile}
        isSquared={isSquared}
        lineThick={lineThick}
        nutHeight={nutHeight}
        width={fretBoardWidth}
                 />}
      <FretBoard
        hasNut={hasNut}
        height={fretBoardHeight}
        isFile={isFile}
        isSquared={isSquared}
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
        isFile={isFile}
        isSquared={isSquared}
        leftHanded={leftHanded}
        lineDeflect={lineDeflect}
        lineThick={lineThick}
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
