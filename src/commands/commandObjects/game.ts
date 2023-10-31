import { BaseCommand } from '../../Types'

interface GameCommand extends BaseCommand {
  awaitCommand: (guess: number) => string
}

export const gameCommand: GameCommand = {
  command: 'truth game',
  description: 'Two truths and a lie! Learn more about me.',
  process: (upperProcess: () => void) => {
    upperProcess()
  },
  awaitCommand: (guess: number) => {
    return guess.toString()
  },
  type: 'complex',
  regex: /[1-3]/,
  hide: false,
}
