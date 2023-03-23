import { ComplexCommand } from '../../Types'

export const clearCommand: ComplexCommand = {
  command: 'clear',
  description: 'Reset the terminal',
  process: (upperProcess: () => void) => {
    upperProcess()
  },
  type: 'complex',
  regex: null,
  hide: null,
  awaitCommand: null,
}
