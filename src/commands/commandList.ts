import { processAbout } from './about'
import { Command } from '../Types'

function downloadResume() {
  fetch('Resume.pdf').then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob)
      const alink = document.createElement('a')
      alink.href = fileURL
      alink.download = 'Cecil-Thomas-Resume.pdf'
      alink.click()
    })
  })
}

function addAPromptObj(currentId: number, prompt: string) {
  return {
    id: currentId,
    prompt,
    source: 'system',
  }
}

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

export const allCommands: Command[] = [
  {
    command: 'about',
    process: (currentId: number) => addAPromptObj(currentId, processAbout()),
    description: 'Tells you a little about me.',
    type: 'simple',
    regex: /a/,
    awaitCommand: () => null,
    hide: false,
  },
  {
    command: 'resume',
    process: (currentId: number) => {
      return [
        addAPromptObj(currentId, '______Work Summary______'),
        addAPromptObj(
          currentId + 1,
          'Entrata - Software Engineer I (2022-Current): but doesnt do anything yet.',
        ),
        addAPromptObj(
          currentId + 2,
          'Entrata - Software Development Manager (2020-2022): but doesnt do anything yet.',
        ),
        addAPromptObj(
          currentId + 3,
          'Entrata - Customer Resolution Specialist (2018-2020): but doesnt do anything yet.',
        ),
        addAPromptObj(currentId + 4, '______Project Summary______'),
        addAPromptObj(
          currentId + 5,
          'Journeys.Cafe - Website built using React, NodeJs (on lambda functions), and a postgres db.',
        ),
        addAPromptObj(
          currentId + 6,
          'Frozenspade.TV - Website built using React. Hosted on Netlify, utilizes CI/CD.',
        ),
        addAPromptObj(
          currentId + 7,
          'Toolring.Cecil-Thomas.com - Fun little site for people playing Animal Crossing New Horizons. Gives a filterable table of things you can catch in the game.',
        ),
        addAPromptObj(
          currentId + 8,
          'Benazio Royale - Game submission for the 2022 GMTK Game Jam. Built using Unity (C#)',
        ),
        addAPromptObj(
          currentId + 9,
          'Samba Island - Small game built for fun using Unity (C#).',
        ),
        addAPromptObj(currentId + 10, '______Skills Summary______'),
        addAPromptObj(
          currentId + 11,
          "Javascipt - I love working with Javascript! Front-end, backend, doesn't matter.",
        ),
        addAPromptObj(
          currentId + 12,
          'C# - I love working in C# to build games using the Unity engine.',
        ),
        addAPromptObj(
          currentId + 13,
          'AWS - From using it in my job, to personal projects I am comfortable utilizing AWS for different solutions.',
        ),
      ]
    },
    description:
      'Brief simple resume. Each section is not exhaustive. Just a basic idea.',
    type: 'multi',
    regex: /a/,
    awaitCommand: () => null,
    hide: false,
  },
  {
    command: 'clear',
    description: 'Reset the terminal',
    process: (upperProcess: () => void) => {
      upperProcess()
    },
    type: 'complex',
    regex: /a/,
    awaitCommand: () => null,
    hide: false,
  },
  {
    command: 'list',
    description: 'List all the commands and their descriptions.',
    process: (upperProcess: () => void) => {
      upperProcess()
    },
    type: 'complex',
    regex: /a/,
    awaitCommand: () => null,
    hide: false,
  },
  {
    command: 'calculate',
    description:
      'Input a simple math expression such as: 1+2, 5-3, 7*8, etc. Type "exit" to quit out.',
    process: (upperProcess: () => void) => {
      upperProcess()
    },
    awaitCommand: (expression: string) => {
      const numbersList = expression.match(new RegExp(/[0-9]+/g))
      const operatorObj = expression.match(new RegExp(/[+\-*/]/))
      if(numbersList && operatorObj) {
        const operator = operatorObj[0]
        if (operator === '+') {
          return parseFloat(numbersList[0]) + parseFloat(numbersList[1])
        } else if (operator === '-') {
          return parseFloat(numbersList[0]) - parseFloat(numbersList[1])
        } else if (operator === '*') {
          return parseFloat(numbersList[0]) * parseFloat(numbersList[1])
        } else if (operator === '/') {
          return parseFloat(numbersList[0]) / parseFloat(numbersList[1])
        }
      }
      return 'Invalid input.'
    },
    type: 'complex',
    regex: /[0-9]+|[+\-/][0-9]+/,
    hide: false,
  },
  {
    command: 'calculate weather f',
    description:
      'Input the celsius value, and it will output the farenheight. Type "exit" to quit out.',
    process: (upperProcess: () => void) => {
      upperProcess()
    },
    type: 'complex',
    regex: /^-?\d+(\.\d*)?$/,
    awaitCommand: (value: string) => {
      return (parseFloat(value) * 9) / 5 + 32
    },
    hide: false,
  },
  {
    command: 'calculate weather c',
    description:
      'Input the farenheight value, and it will output the celsius. Type "exit" to quit out.',
    process: (upperProcess: () => void) => {
      upperProcess()
    },
    type: 'complex',
    regex: /^-?\d+(\.\d*)?$/,
    awaitCommand: (value: string) => {
      return ((parseFloat(value) - 32) * 5) / 9
    },
    hide: false
  },
  {
    command: 'movies',
    description:
      'A list of some of my favorite movies. Not in order. How can anyone actually rank them?',
    type: 'multi',
    process: (currentId: number) => {
      return [
        addAPromptObj(currentId, '______Some Movies That I Like______'),
        addAPromptObj(
          currentId + 1,
          'Interstellar - I love Christopher Nolan movies, and Sci-Fi movies, so this is a perfect combination.',
        ),
        addAPromptObj(
          currentId + 2,
          "Puss In Boots: The Last Wish - It's been out only about 4 months now, but I've seen it probably 7 times.",
        ),
        addAPromptObj(
          currentId + 3,
          'Man From U.N.C.L.E. - This movie kinda flew under the radar for some reason, but it is fantastic.',
        ),
        addAPromptObj(
          currentId + 4,
          'The Lord of the Rings The Fellowship of the Ring - I think the first one is my favorite. It nails down the tone and stakes of the trilogy very well.',
        ),
        addAPromptObj(
          currentId + 5,
          "Star Wars The Last Jedi - It isn't my favorite out of all of the Star Wars, but I think it is super underrated. Some of the most beautiful shots in all of Star Wars.",
        ),
        addAPromptObj(
          currentId + 6,
          'The Princess Bride - This is my pick for "If I was stuck on a deserted island and only could bring one movie." I don\'t think I can get tired of watching it.',
        ),
        addAPromptObj(
          currentId + 7,
          "No Time To Die - I love all of the Daniel Craig Bond movies (and all the other Bond movies that I've seen so far). But this one has some super fun camera work that I love watching.",
        ),
        addAPromptObj(
          currentId + 8,
          'Gladiator, Hot Fuzz, The Prince of Egypt, The Big Short, Pacific Rim, The Lego Movie, Sherlock Holmes, Secondhand Lions, Knives Out, Jojo Rabbit, 3 Idiots, etc.',
        ),
      ]
    },
    regex: /a/,
    awaitCommand: () => null,
    hide: false,
  },
  {
    command: 'games',
    description: 'A list of some of my favorite games.',
    type: 'multi',
    process: (currentId: number) => {
      return [
        addAPromptObj(currentId, '______Some Games That I Like______'),
        addAPromptObj(
          currentId + 1,
          "Super Smash Bros. Melee - I've put so many hours into this game. Including hosting and participating in tournemants all over the US.",
        ),
        addAPromptObj(
          currentId + 2,
          'Pokemon Emerald - Probably my favorite out of all the Pokemon games. I love the Hoenn Pokemon. #TreeckoIsTheBestStarter',
        ),
        addAPromptObj(
          currentId + 3,
          "Minecraft - I've never been one of those crazy people building all the machines, but I enjoy plaing every once in awhile.",
        ),
        addAPromptObj(
          currentId + 4,
          'Stardew Valley - A girl I dated got me into this game. I really enjoy simple relaxing games like this.',
        ),
        addAPromptObj(
          currentId + 5,
          'Age of Empires (All of them) - I can directly attribut my love of history to this francise. RTS games are just really fun in general. (I even love the DS one)',
        ),
        addAPromptObj(
          currentId + 6,
          'Starcraft 2 - My first love when it comes to competitive games. I put a lot of hours into this one and got as high as Diamond league. Have never played the campaign though lol',
        ),
        addAPromptObj(
          currentId + 7,
          "Microsoft Flight Simulator - The newest one is a lot of fun. I've always loved airplanes, so this is the closet thing I can do to getting a pilots license for now.",
        ),
        addAPromptObj(
          currentId + 8,
          "Final Fantasy IV - I don't think I'm allowed not to include this on my list of games since my name is Cecil. But aside from that, I really enjoy the game. Lots of fun characters.",
        ),
        addAPromptObj(
          currentId + 9,
          "Some day I will make a game that goes here.",
        ),
      ]
    },
    regex: /a/,
    awaitCommand: () => null,
    hide: false,
  },
  {
    command: 'goto journeys',
    description: 'Will open a new tab to Journeys.Cafe',
    type: 'simple',
    process: (currentId: number) => {
      window.open('https://journeys.cafe/')
      return addAPromptObj(currentId, 'Opening Journeys.Cafe...')
    },
    hide: true,
    regex: /a/,
    awaitCommand: () => null,
  },
  {
    command: 'goto frozenspade',
    description: 'Will open a new tab to FrozenSpade.TV.',
    type: 'simple',
    process: (currentId: number) => {
      window.open('https://frozenspade.tv/')
      return addAPromptObj(currentId, 'Opening FrozenSpade.TV...')
    },
    hide: true,
    regex: /a/,
    awaitCommand: () => null,
  },
  {
    command: 'goto toolring',
    description: 'Will open a new tab to Toolring.Cecil-Thomas.com',
    type: 'simple',
    process: (currentId: number) => {
      window.open('https://toolring.cecil-thomas.com')
      return addAPromptObj(currentId, 'Opening Toolring.Cecil-Thomas.com...')
    },
    hide: true,
    regex: /a/,
    awaitCommand: () => null,
  },
  {
    command: 'goto (journeys|frozenspade|toolring)',
    description:
      'Will open a new tab at the specified site. ie. goto journeys will send you to Journeys.Cafe',
    type: 'simple',
    regex: /a/,
    awaitCommand: () => null,
    hide: false,
    process: (currentId: number) =>
      addAPromptObj(currentId, 'Please check your selection.')
  },
  {
    command: 'social',
    description: 'Shows you where to find me on Social Media.',
    type: 'multi',
    process: (currentId: number) => {
      return [
        addAPromptObj(currentId, '______Social Media______'),
        addAPromptObj(currentId + 1, 'Twitter: @KiTsuNe76'),
        addAPromptObj(currentId + 4, 'LinkedIn: cecilthomas23'),
        addAPromptObj(currentId + 2, 'Instagram: journeys.cafe'),
        addAPromptObj(currentId + 3, 'Email: me@cecil-thomas.com'),
        addAPromptObj(currentId + 4, 'GitHub: kitsune21'),
      ]
    },
    regex: /a/,
    awaitCommand: () => null,
    hide: false,
  },
  {
    command: 'books',
    description: 'Shows some books that I like.',
    type: 'multi',
    process: (currentId: number) => {
      return [
        addAPromptObj(currentId, '______Books______'),
        addAPromptObj(
          currentId + 1,
          "Ender's Game - Orson Scott Card: I love sci-fi, and this is an interesting future.",
        ),
        addAPromptObj(
          currentId + 2,
          'Endurance - Alfred Lansing: An amazing story about dealing with failure after failure, and somehow surviving it all.',
        ),
        addAPromptObj(
          currentId + 3,
          'The Lord of the Rings - JRR Tolkien: Man this book is dense. But it is so worth the read.',
        ),
        addAPromptObj(
          currentId + 4,
          'The Art of Learning - Josh Waitzkin: This is a very interesting read. Josh is a chess prodigy (the kid from "Searching for Bobby Fisher"), and a world champion martial artist.',
        ),
        addAPromptObj(
          currentId + 5,
          "Personal Memoirs of Ulysses S. Grant: This mostly deals with his military career. He talks about the Civil War and shares a lot of stories that you wouldn't learn in history class.",
        ),
      ]
    },
    regex: /a/,
    awaitCommand: () => null,
    hide: false,
  },
  {
    command: 'download resume',
    description: 'Downloads the resume.',
    type: 'simple',
    process: (currentId: number) => {
      downloadResume()
      return addAPromptObj(currentId, 'Downloading...')
    },
    regex: /a/,
    awaitCommand: () => null,
    hide: false,
  },
  {
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
  },
  {
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
      allCommands.forEach((command) => {
        if (command.command === 'write song' && command.awaitCommand) {
          command.awaitCommand(songs[randomSong])
        }
      })
      return addAPromptObj(currentId, 'Playing...')
    },
    regex: /a/,
    awaitCommand: () => null,
    hide: false,
  },
]
