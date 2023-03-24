import { addAPromptObj } from '../commandList'

function lookUpNoteFrequency(checkNote: string) {
  const notes = [
    { note: 'c', frequency: 32.7 },
    { note: 'd', frequency: 36.71 },
    { note: 'e', frequency: 41.2 },
    { note: 'f', frequency: 43.65 },
    { note: 'g', frequency: 49 },
    { note: 'a', frequency: 55 },
    { note: 'b', frequency: 61.74 },
  ]
  let frequency = 0
  const noteSplit = checkNote.split('')
  const noteOctave = noteSplit[1] ? parseInt(noteSplit[1]) : 4
  notes.forEach((note) => {
    if (note.note === noteSplit[0].toLowerCase()) {
      frequency = note.frequency
    }
  })
  return frequency * Math.pow(2, noteOctave - 1)
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
  regex: null,
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
  awaitCommand: () => null,
  hide: false,
  regex: null,
}
