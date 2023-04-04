import { addAPromptObj } from '../commandList'
import { SimpleCommand } from '../../Types'

const aboutText =
  'My name is Cecil. I am a software developer in the Salt Lake City area. ' +
  'I love building things and expressing my creativity in anyway that I can. ' +
  'I like to keep busy by learning and experiencing as many things as possible. ' +
  "Whether that is new computer science concepts, science, history (especially history), languages, it really doesn't matter. I want to learn it all! " +
  'I look forward to meeting and working with you! ' +
  'よろしくお願いします！ ' +
  'Mucho Gusto! '

export const aboutCommand: SimpleCommand = {
  command: 'about',
  process: (currentId: number) => addAPromptObj(currentId, aboutText),
  description: 'Tells you a little about me.',
  type: 'simple',
  regex: null,
  hide: null,
  awaitCommand: null,
}
