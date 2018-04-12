import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Chord from '../src/index.jsx'

const ukuleleChords = [
  { name: 'E7', markers: [1, 2, 0, 2] },
  { name: 'Bb', markers: [3, 2, 1, 1] },
  { name: 'D7', markers: [2, 2, 2, 3] },
  { name: 'Am7', markers: [0, 0, 0, 0] },
  { name: 'E', markers: [9, 8, 7, 7] },
  { name: 'Am', markers: ['x', 4, 5, 3] }
]

const guitarChords = [
  { name: 'A', markers: ['x', 0, 2, 2, 2, 0] },
  { name: 'Bm', markers: ['x', 2, 4, 4, 3, 'x'] },
  { name: 'D', markers: ['x', 5, 4, 2, 3, 2] },
  { name: 'F', markers: ['x', 'x', 3, 2, 1, 1] },
  { name: 'C', markers: ['x', 3, 2, 0, 1, 0] },
  { name: 'F#', markers: ['x', 'x', 4, 3, 2, 2] }
]

const colors = {
  chordName: '#00796b',
  fretBoard: '#009688',
  marker: '#00796b',
  mutedString: '#009688',
  nut: '#009688',
  fretReference: '#ffffff'
}

const inverseColors = {
  chordName: '#ffffff',
  fretBoard: '#ffffff',
  marker: '#ffffff',
  mutedString: '#ffffff',
  nut: '#ffffff',
  fretReference: '#009688'
}

const demo = (
  <Fragment>
    <h1>Ukulele Chords</h1>
    <ul>
      {ukuleleChords.map((chord, index) => (
        <li key={index}>
          <Chord chord={chord} colors={colors} key={index} />
        </li>
      ))}
    </ul>
    <div className='demo-Inverse'>
      <h1>Ukulele Chords (inverse)</h1>
      <ul>
        {ukuleleChords.map((chord, index) => (
          <li key={index}>
            <Chord chord={chord} colors={inverseColors} inverse key={index} />
          </li>
        ))}
      </ul>
    </div>
    <h1 className='demo-Default'>Ukulele Chords (default colors)</h1>
    <ul>
      {ukuleleChords.map((chord, index) => (
        <li key={index}>
          <Chord chord={chord} key={index} />
        </li>
      ))}
    </ul>
    <h1>Ukulele Chords (left handed)</h1>
    <ul>
      {ukuleleChords.map((chord, index) => (
        <li key={index}>
          <Chord chord={chord} colors={colors} leftHanded key={index} />
        </li>
      ))}
    </ul>
    <div className='demo-Inverse'>
      <h1>Ukulele Chords (inverse and left handed)</h1>
      <ul>
        {ukuleleChords.map((chord, index) => (
          <li key={index}>
            <Chord chord={chord} colors={inverseColors} inverse leftHanded key={index} />
          </li>
        ))}
      </ul>
    </div>
    <h1>Guitar Chords</h1>
    <ul>
      {guitarChords.map((chord, index) => (
        <li key={index}>
          <Chord chord={chord} colors={colors} key={index} />
        </li>
      ))}
    </ul>
    <div className='demo-Inverse'>
      <h1>Guitar Chords (inverse)</h1>
      <ul>
        {guitarChords.map((chord, index) => (
          <li key={index}>
            <Chord chord={chord} colors={inverseColors} inverse key={index} />
          </li>
        ))}
      </ul>
    </div>
    <h1>Guitar Chords (left handed)</h1>
    <ul>
      {guitarChords.map((chord, index) => (
        <li key={index}>
          <Chord chord={chord} colors={colors} leftHanded key={index} />
        </li>
      ))}
    </ul>
    <div className='demo-Inverse'>
      <h1>Guitar Chords (inverse and left handed)</h1>
      <ul>
        {guitarChords.map((chord, index) => (
          <li key={index}>
            <Chord chord={chord} colors={inverseColors} inverse leftHanded key={index} />
          </li>
        ))}
      </ul>
    </div>
  </Fragment>
)

ReactDOM.render(demo, document.getElementById('demo'))
