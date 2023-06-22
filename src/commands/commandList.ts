import { BaseCommand, Prompt } from '../Types'
import {
  aboutCommand,
  salesPitchCommand,
  whyHireCommand,
} from './commandObjects/about'
import {
  downloadResumeCommand,
  resumeCommand,
  resumeWorkCommand,
  resumeProjectCommand,
  resumeSkillsCommand,
} from './commandObjects/resume'
import { clearCommand } from './commandObjects/clear'
import {
  booksCommand,
  gamesCommand,
  listCommand,
  moviesCommand,
  socialsCommand,
  techStackCommand,
  foodCommand,
  hobbyCommand,
} from './commandObjects/list'
import {
  calculateCommand,
  calculateFCommand,
  calculateCCommand,
} from './commandObjects/calculate'
import {
  gotoBasicCommand,
  gotoFrozenspadeCommand,
  gotoJourneysCommand,
  gotoToolringCommand,
} from './commandObjects/goto'
import { playSongCommand, writeSongCommand } from './commandObjects/songs'

export function addAPromptObj(
  currentId: number,
  prompt: string,
  hideTimestamp = false,
  linkUrl = '',
): Prompt {
  return {
    id: currentId,
    prompt,
    source: 'system',
    timestamp: new Date(),
    hideTimestamp: hideTimestamp,
    link: linkUrl ? linkUrl : '',
  }
}

export const allCommands: BaseCommand[] = [
  clearCommand,
  listCommand,
  aboutCommand,
  whyHireCommand,
  salesPitchCommand,
  resumeCommand,
  resumeWorkCommand,
  resumeProjectCommand,
  resumeSkillsCommand,
  downloadResumeCommand,
  foodCommand,
  hobbyCommand,
  techStackCommand,
  moviesCommand,
  gamesCommand,
  socialsCommand,
  booksCommand,
  calculateCommand,
  calculateCCommand,
  calculateFCommand,
  gotoBasicCommand,
  gotoJourneysCommand,
  gotoFrozenspadeCommand,
  gotoToolringCommand,
  writeSongCommand,
  playSongCommand,
]
