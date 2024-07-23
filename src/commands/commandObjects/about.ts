import { addAPromptObj } from '../commandList'
import { SimpleCommand, BaseCommand } from '../../Types'

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

export const whyHireCommand: BaseCommand = {
  command: 'why hire me',
  process: (currentId: number) => {
    return [
      addAPromptObj(
        currentId,
        "#1 - I'm scrappy. I like to build things. I like to take apart things and figure out how and why they work.",
        true,
      ),
      addAPromptObj(
        currentId + 1,
        '#2 - Hardly a day goes by that I\'m not working on something, or learning something new. You can see more about my projects using the "resume projects" command. Use the "sales pitch" command to see my current project that is taking up much of my time.',
        true,
      ),
      addAPromptObj(
        currentId + 2,
        "#3 - I'm as comfortable taking the lead on a project as I am working on the team. And I have a lot of experience doing both.",
        true,
      ),
      addAPromptObj(
        currentId + 3,
        '#4 - I have over a 800 day streak on Duolingo, studying Spanish.',
        true,
      ),
    ]
  },
  description: 'Shows you why you need to hire me.',
  type: 'multi',
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
