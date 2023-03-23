import { addAPromptObj } from '../commandList'

function lookUpNoteFrequency(checkNote: string) {
  const notes = [
    [
      { note: 'c', frequency: 32.7 },
      { note: 'd', frequency: 36.71 },
      { note: 'e', frequency: 41.2 },
      { note: 'f', frequency: 43.65 },
      { note: 'g', frequency: 49 },
      { note: 'a', frequency: 55 },
      { note: 'b', frequency: 61.74 },
    ],
    [
      { note: 'c', frequency: 65.41 },
      { note: 'd', frequency: 73.42 },
      { note: 'e', frequency: 82.41 },
      { note: 'f', frequency: 87.31 },
      { note: 'g', frequency: 98 },
      { note: 'a', frequency: 110 },
      { note: 'b', frequency: 123.5 },
    ],
    [
      { note: 'c', frequency: 130.8 },
      { note: 'd', frequency: 146.8 },
      { note: 'e', frequency: 164.8 },
      { note: 'f', frequency: 174.6 },
      { note: 'g', frequency: 196 },
      { note: 'a', frequency: 220 },
      { note: 'b', frequency: 246.9 },
    ],
    [
      { note: 'c', frequency: 261.6 },
      { note: 'd', frequency: 293.7 },
      { note: 'e', frequency: 329.6 },
      { note: 'f', frequency: 349.2 },
      { note: 'g', frequency: 392 },
      { note: 'a', frequency: 440 },
      { note: 'b', frequency: 493.9 },
    ],
    [
      { note: 'c', frequency: 523.3 },
      { note: 'd', frequency: 587.3 },
      { note: 'e', frequency: 659.3 },
      { note: 'f', frequency: 698.5 },
      { note: 'g', frequency: 784 },
      { note: 'a', frequency: 880 },
      { note: 'b', frequency: 987.8 },
    ],
    [
      { note: 'c', frequency: 1047 },
      { note: 'd', frequency: 1175 },
      { note: 'e', frequency: 1319 },
      { note: 'f', frequency: 1397 },
      { note: 'g', frequency: 1568 },
      { note: 'a', frequency: 1760 },
      { note: 'b', frequency: 1976 },
    ],
    [
      { note: 'c', frequency: 2093 },
      { note: 'd', frequency: 2349 },
      { note: 'e', frequency: 2637 },
      { note: 'f', frequency: 2794 },
      { note: 'g', frequency: 3136 },
      { note: 'a', frequency: 3520 },
      { note: 'b', frequency: 3951 },
    ],
    [
      { note: 'c', frequency: 4186 },
      { note: 'd', frequency: 4699 },
      { note: 'e', frequency: 5274 },
      { note: 'f', frequency: 5588 },
      { note: 'g', frequency: 6272 },
      { note: 'a', frequency: 7040 },
      { note: 'b', frequency: 7902 },
    ],
  ]
  let frequency = 0
  const noteSplit = checkNote.split('')
  const noteOctave = noteSplit[1] ? parseInt(noteSplit[1]) - 1 : 3
  notes[noteOctave].forEach((note) => {
    if (note.note === noteSplit[0].toLowerCase()) {
      frequency = note.frequency
    }
  })
  return frequency
}

export const writeSongCommand = {
  command: 'write song',
  description:
    'Input notes c, d, e, f, g, a, b. Follow the note with an octave: 1-8. If no octave, it will default to the 4th. eg c1c2c3cc5c6c7c8',
  type: 'complex',
  process: (upperProcess: () => void) => {
    upperProcess()
  },
  awaitCommand: (notes: string) => {
    const myRegexp = /[a-g][1-9]?/g
    const notesMatched = [...notes.matchAll(myRegexp)]
    const notesList: string[] = []
    notesMatched.forEach((note) => {
      notesList.push(note[0])
    })
    const startDelay = 0
    const addDelay = 400
    let currentDelay = startDelay
    const audioContextList: AudioContext[] = []
    notesList.forEach((note) => {
      setTimeout(() => {
        const context = new AudioContext()
        audioContextList.push(context)
        const o = context.createOscillator()
        o.frequency.value = 0
        o.type = 'square'
        o.connect(context.destination)
        o.start(0)
        o.frequency.value = lookUpNoteFrequency(note)
        o.stop(0.34)
      }, currentDelay)
      currentDelay += addDelay
    })
    audioContextList.forEach((context) => {
      context.close()
    })
    return 'Playing...'
  },
  hide: false,
  regex: /a/,
}

export const playSongCommand = {
  command: 'play a song',
  description: 'Will play a random song.',
  type: 'simple',
  process: (currentId: number) => {
    const songs = [
      'bd5agabd5abd5a5g5d5c5ba',
      'ccegecddffb3ccegecddb3b3c',
      'a5b5c6a5b5c6b5a5e5g5a5',
      'fabfabfabe5d5bc5bge',
      'c5c5c5af5',
      'eeecgecgebbbc5gecge',
    ]
    const randomSong = Math.floor(Math.random() * songs.length)
    writeSongCommand.awaitCommand(songs[randomSong])
    return addAPromptObj(currentId, 'Playing...')
  },
  regex: /a/,
  awaitCommand: () => null,
  hide: false,
}
