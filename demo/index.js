import React, { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import Chord from '../src/index.jsx'

const ukuleleChords = [
  { name: 'E7', positions: [[1, 2, 0, 2], [0, 3, 1, 2], [9, 8, 8, 7]] },
  { name: 'Bb', positions: [[3, 2, 1, 1]] },
  { name: 'D7', positions: [[2, 2, 2, 3]] },
  { name: 'Am7', positions: [[0, 0, 0, 0]] },
  { name: 'E', positions: [[9, 8, 7, 7]] },
  { name: 'Am', positions: [['x', 4, 5, 3]] }
]
const guitarChords = [
  { name: 'A', positions: [['x', 0, 2, 2, 2, 0]] },
  { name: 'Bm', positions: [['x', 2, 4, 4, 3, 'x']] },
  { name: 'D', positions: [['x', 5, 4, 2, 3, 2]] },
  { name: 'F', positions: [['x', 'x', 3, 2, 1, 1]] },
  { name: 'C', positions: [['x', 3, 2, 0, 1, 0]] },
  { name: 'F#', positions: [['x', 'x', 4, 3, 2, 2]] }
]

const demo = (
  <Fragment>
    <section className='Demo'>
      <h1>Ukulele Chords (default)</h1>
      <ul>{ukuleleChords.map((chord, index) => <li key={index}><Chord chord={chord} /></li>)}</ul>
    </section>
    <section className='DemoCustom'>
      <h1>Ukulele Chords (custom)</h1>
      <ul>{ukuleleChords.map((chord, index) => <li key={index}><Chord chord={chord} /></li>)}</ul>
    </section>
    <section className='DemoInverse'>
      <h1>Ukulele Chords (custom)</h1>
      <ul>{ukuleleChords.map((chord, index) => <li key={index}><Chord chord={chord} /></li>)}</ul>
    </section>
    <section className='Demo'>
      <h1>Ukulele Chords (left handed)</h1>
      <ul>{ukuleleChords.map((chord, index) => <li key={index}><Chord chord={chord} leftHanded /></li>)}</ul>
    </section>
    <section className='Demo'>
      <h1>Ukulele Chords (squared)</h1>
      <ul>{ukuleleChords.map((chord, index) => <li key={index}><Chord chord={chord} isSquared /></li>)}</ul>
    </section>
    <section className='Demo'>
      <h1>Ukulele Chords (line thick)</h1>
      <ul>{ukuleleChords.map((chord, index) => <li key={index}><Chord chord={chord} isThick /></li>)}</ul>
    </section>
    <section className='Demo'>
      <h1>Ukulele Chords (total frets)</h1>
      <ul>{ukuleleChords.map((chord, index) => <li key={index}><Chord chord={chord} totalFrets={5} /></li>)}</ul>
    </section>
    <section className='Demo'>
      <h1>Guitar Chords</h1>
      <ul>{guitarChords.map((chord, index) => <li key={index}><Chord chord={chord} /></li>)}</ul>
    </section>
  </Fragment>
)

const container = document.getElementById('demo')
const root = createRoot(container)

root.render(demo)
