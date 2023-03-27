import { BaseCommand, Prompt } from '../Types'
import { aboutCommand } from './commandObjects/about'
import { downloadResumeCommand, resumeCommand } from './commandObjects/resume'
import { clearCommand } from './commandObjects/clear'
import {
  booksCommand,
  gamesCommand,
  listCommand,
  moviesCommand,
  socialsCommand,
  techStackCommand,
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
): Prompt {
  return {
    id: currentId,
    prompt,
    source: 'system',
    timestamp: new Date(),
    hideTimestamp: hideTimestamp,
  }
}

export const allCommands: BaseCommand[] = [
  clearCommand,
  listCommand,
  aboutCommand,
  resumeCommand,
  downloadResumeCommand,
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
