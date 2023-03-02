import { processAbout } from "./about"

export const allCommands = [
    {
        command: 'about',
        process: () => processAbout(),
        description: 'Tells you a little about me.',
        type: 'simple'
    },
    {
        command: 'test',
        process: () => 'test, but doesnt do anything yet.',
        description: 'Dont do nothing.',
        type: 'simple'
    },
    {
        command: 'clear',
        description: 'Reset the terminal',
        process: (upperProcess) => {upperProcess()},
        type: 'complex'
    },
    {
        command: 'list',
        description: 'List all the commands and their descriptions.',
        process: (upperProcess) => {upperProcess()},
        type: 'complex'
    },
    {
        command: 'calculate',
        description: 'Input a simple math expression such as: 1+2, 5-3, 7*8, etc.',
        process: (upperProcess) => {upperProcess()},
        awaitCommand: expression => {
            const numbersList = expression.match(new RegExp(/[0-9]+/g))
            const operatorObj = expression.match(new RegExp(/[+\-*/]/))
            const operator = operatorObj[0]
            if(operator === '+') {
                return parseFloat(numbersList[0]) + parseFloat(numbersList[1])
            } else if(operator === '-') {
                return parseFloat(numbersList[0]) - parseFloat(numbersList[1])
            } else if(operator === '*') {
                return parseFloat(numbersList[0]) * parseFloat(numbersList[1])
            } else if(operator === '/') {
                return parseFloat(numbersList[0]) / parseFloat(numbersList[1])
            }

        },
        type: 'complex',
        regex: /[0-9]+|[+\-/][0-9]+/
    }
]