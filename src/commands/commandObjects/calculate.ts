import { BaseCommand } from '../../Types'

interface CalculateCommand extends BaseCommand {
  awaitCommand: (input: string) => string
}

export const calculateCommand: CalculateCommand = {
  command: 'calculate',
  description:
    'Input a simple math expression such as: 1+2, 5-3, 7*8, etc. Type "exit" to quit out.',
  process: (upperProcess: () => void) => {
    upperProcess()
  },
  awaitCommand: (expression: string) => {
    const numbersList = expression.match(new RegExp(/[0-9]+/g))
    const operatorObj = expression.match(new RegExp(/[+\-*/]/))
    if (numbersList && operatorObj) {
      const operator = operatorObj[0]
      if (operator === '+') {
        return (
          parseFloat(numbersList[0]) + parseFloat(numbersList[1])
        ).toString()
      } else if (operator === '-') {
        return (
          parseFloat(numbersList[0]) - parseFloat(numbersList[1])
        ).toString()
      } else if (operator === '*') {
        return (
          parseFloat(numbersList[0]) * parseFloat(numbersList[1])
        ).toString()
      } else if (operator === '/') {
        return (
          parseFloat(numbersList[0]) / parseFloat(numbersList[1])
        ).toString()
      }
    }
    return 'Invalid input.'
  },
  type: 'complex',
  regex: /[0-9]+|[+\-/][0-9]+/,
  hide: false,
}

export const calculateFCommand: CalculateCommand = {
  command: 'calculate weather f',
  description:
    'Input the celsius value, and it will output the farenheight. Type "exit" to quit out.',
  process: (upperProcess: () => void) => {
    upperProcess()
  },
  type: 'complex',
  regex: /^-?\d+(\.\d*)?$/,
  awaitCommand: (value: string) => {
    return ((parseFloat(value) * 9) / 5 + 32).toString()
  },
  hide: false,
}

export const calculateCCommand: CalculateCommand = {
  command: 'calculate weather c',
  description:
    'Input the farenheight value, and it will output the celsius. Type "exit" to quit out.',
  process: (upperProcess: () => void) => {
    upperProcess()
  },
  type: 'complex',
  regex: /^-?\d+(\.\d*)?$/,
  awaitCommand: (value: string) => {
    return (((parseFloat(value) - 32) * 5) / 9).toString()
  },
  hide: false,
}
