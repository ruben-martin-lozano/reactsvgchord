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

const demo = (
  <Fragment>
    <h1>Ukulele Chords</h1>
    <ul>
      {ukuleleChords.map((chord, index) => (
        <li key={index}>
          <Chord chord={chord} key={index} />
        </li>
      ))}
    </ul>
    <div className='demo-Inverse'>
      <h1>Ukulele Chords (inversed)</h1>
      <ul>
        {ukuleleChords.map((chord, index) => (
          <li key={index}>
            <Chord chord={chord} inverse key={index} />
          </li>
        ))}
      </ul>
    </div>
    <h1>Ukulele Chords (left handed)</h1>
    <ul>
      {ukuleleChords.map((chord, index) => (
        <li key={index}>
          <Chord chord={chord} leftHanded key={index} />
        </li>
      ))}
    </ul>
    <div className='demo-Inverse'>
      <h1>Ukulele Chords (inversed and left handed)</h1>
      <ul>
        {ukuleleChords.map((chord, index) => (
          <li key={index}>
            <Chord chord={chord} inverse leftHanded key={index} />
          </li>
        ))}
      </ul>
    </div>
    <h1>Guitar Chords</h1>
    <ul>
      {guitarChords.map((chord, index) => (
        <li key={index}>
          <Chord chord={chord} key={index} />
        </li>
      ))}
    </ul>
    <div className='demo-Inverse'>
      <h1>Guitar Chords (inversed)</h1>
      <ul>
        {guitarChords.map((chord, index) => (
          <li key={index}>
            <Chord chord={chord} inverse key={index} />
          </li>
        ))}
      </ul>
    </div>
    <h1>Guitar Chords (left handed)</h1>
    <ul>
      {guitarChords.map((chord, index) => (
        <li key={index}>
          <Chord chord={chord} leftHanded key={index} />
        </li>
      ))}
    </ul>
    <div className='demo-Inverse'>
      <h1>Guitar Chords (inversed and left handed)</h1>
      <ul>
        {guitarChords.map((chord, index) => (
          <li key={index}>
            <Chord chord={chord} inverse leftHanded key={index} />
          </li>
        ))}
      </ul>
    </div>
  </Fragment>
)

ReactDOM.render(demo, document.getElementById('demo'))
