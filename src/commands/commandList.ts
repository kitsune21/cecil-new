import { BaseCommand } from '../Types'
import { aboutCommand } from './commandObjects/about'
import { downloadResumeCommand, resumeCommand } from './commandObjects/resume'
import { clearCommand } from './commandObjects/clear'
import {
  booksCommand,
  gamesCommand,
  listCommand,
  moviesCommand,
  socialsCommand,
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

export function addAPromptObj(currentId: number, prompt: string) {
  return {
    id: currentId,
    prompt,
    source: 'system',
  }
}

export const allCommands: BaseCommand[] = [
  aboutCommand,
  resumeCommand,
  downloadResumeCommand,
  clearCommand,
  listCommand,
  calculateCommand,
  calculateCCommand,
  calculateFCommand,
  moviesCommand,
  gamesCommand,
  socialsCommand,
  booksCommand,
  gotoBasicCommand,
  gotoJourneysCommand,
  gotoFrozenspadeCommand,
  gotoToolringCommand,
  writeSongCommand,
  playSongCommand,
]
