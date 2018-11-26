import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ChordName from './chordName'
import FretBoard from './fretBoard'
import Markers from './markers'
import Nut from './nut'

const fretBoardHeight = 220
const fretBoardWidth = 150

class Chord extends Component {
  state = {
    position: 0
  }

  static propTypes = {
    chord: PropTypes.shape({
      name: PropTypes.string.isRequired,
      positions: PropTypes.array.isRequired
    }).isRequired,
    leftHanded: PropTypes.bool,
    lineThick: PropTypes.number,
    totalFrets: PropTypes.number
  }

  static defaultProps = {
    leftHanded: false,
    lineThick: 4,
    totalFrets: 4
  }

  onChordClick = () => {
    const {positions} = this.props.chord
    let {position} = this.state
    const newPosition = position !== (positions.length - 1) ? position += 1 : 0

    this.state.position !== newPosition && this.setState({
      position: newPosition
    })
  }

  render () {
    const {chord, leftHanded, lineThick, totalFrets} = this.props
    const {name, positions} = chord

    if (!positions || !positions.length || !name) return null

    const {position} = this.state
    const frets = positions[position]
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

    return (
      <svg className='Chord' onClick={this.onChordClick} viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
        <ChordName
          height={chordNameHeight}
          name={name}
          viewBox={viewBox} />
        {hasNut && <Nut
          lineThick={lineThick}
          nutHeight={nutHeight}
          width={fretBoardWidth}
        />}
        <FretBoard
          height={fretBoardHeight}
          lineThick={lineThick}
          strings={strings}
          totalFrets={totalFrets}
          width={fretBoardWidth}
          xBase={xBase}
          yBase={yBase} />
        <Markers
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
}

export default Chord
