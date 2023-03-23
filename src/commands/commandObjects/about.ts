import { addAPromptObj } from '../commandList'
import { SimpleCommand } from '../../Types'

function processAbout() {
  const aboutText =
    'My name is Cecil. I am a software developer. I love building things and expressing my creativity in anyway that I can.\n' +
    'I like to watch movies, ride my bike, play with my pets, and learn languages!\n' +
    'よろしくお願いします！\n' +
    'Mucho Gusto!\n'
  return aboutText
}

export const aboutCommand: SimpleCommand = {
  command: 'about',
  process: (currentId: number) => addAPromptObj(currentId, processAbout()),
  description: 'Tells you a little about me.',
  type: 'simple',
  regex: null,
  hide: null,
  awaitCommand: null,
}
