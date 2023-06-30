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

const whyHireText = `I'm scrappy. I like to get into the weeds of whatever it is I'm building and working on. I am always learning and trying out new things.
  I know how to take failure and learn from it. I like to build things that I will actually use. (Run the command "sales pitch" to see a great example!) 
  I currently have over a 450 day streak in Duolingo, studying Spanish.
  I'm as comfortable taking the lead on a project as I am working on the team.
`

export const whyHireCommand: SimpleCommand = {
  command: 'why hire me',
  process: (currentId: number) => addAPromptObj(currentId, whyHireText),
  description: 'Shows you why you need to hire me.',
  type: 'simple',
  regex: null,
  hide: null,
  awaitCommand: null,
}

const salesPitchText = `Journeys.Cafe is your one stop shop for creating sharable itineraries for any type of vacation you will be going on!
  New features are constantly being released! 
  I am building this from the ground up, so please feel free to submit feedback and ideas for things that you need to make your Journey even better!
`

export const salesPitchCommand: SimpleCommand = {
  command: 'sales pitch',
  process: (currentId: number) =>
    addAPromptObj(currentId, salesPitchText, false, 'https://journeys.cafe/'),
  description: 'Shows you why you need to hire me.',
  type: 'simple',
  regex: null,
  hide: null,
  awaitCommand: null,
}
