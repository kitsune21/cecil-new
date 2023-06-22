import React from 'react'
import { allCommands } from './commandList'
import { BaseCommand, Prompt } from '../Types'

export function processCommand(
  promptList: Prompt[],
  promptText: string,
  appState: string,
  currentCommand: BaseCommand | null,
  setAppState: React.Dispatch<React.SetStateAction<string>>,
  setArrowSelect: React.Dispatch<React.SetStateAction<number>>,
  setCurrentCommand: React.Dispatch<React.SetStateAction<BaseCommand | null>>,
  setPromptList: React.Dispatch<React.SetStateAction<Prompt[]>>,
  setPromptText: React.Dispatch<React.SetStateAction<string>>,
) {
  let promptId: number = promptList.length + 1
  const promptsToAdd: Prompt[] = []
  let isClear = false
  const userPrompt: Prompt = {
    id: promptId,
    prompt: promptText,
    source: 'user',
    timestamp: new Date(),
    hideTimestamp: false,
    link: '',
  }
  promptsToAdd.push(userPrompt)
  promptId += 1
  const commandLower = promptText.toLocaleLowerCase().trim()
  if (appState === 'standard') {
    const myCommand: BaseCommand = findCommand(commandLower, promptId)
    if (myCommand.type === 'simple') {
      const newPrompt = myCommand.process(promptId)
      promptsToAdd.push(newPrompt)
    } else if (myCommand.type === 'complex') {
      if (myCommand.command === 'clear') {
        myCommand.process(() => {
          setAppState('standard')
          setArrowSelect(0)
          isClear = true
        })
      } else if (myCommand.command === 'list') {
        myCommand.process(() => {
          const listOfCommands: Prompt[] = []
          allCommands.forEach((entry) => {
            if (!entry.hide) {
              const listEntry: Prompt = {
                id: promptId,
                prompt: `${entry.command} - ${entry.description}`,
                source: 'system',
                timestamp: new Date(),
                hideTimestamp: true,
                link: '',
              }
              promptId += 1
              listOfCommands.push(listEntry)
            }
          })
          promptsToAdd.push(...listOfCommands)
        })
      } else {
        myCommand.process(() => {
          const instructionEntry: Prompt = {
            id: promptId,
            prompt: myCommand.description,
            source: 'system',
            timestamp: new Date(),
            hideTimestamp: false,
            link: '',
          }
          promptsToAdd.push(instructionEntry)
          setAppState('await')
          setCurrentCommand(myCommand)
        })
      }
    } else if (myCommand.type === 'multi') {
      const multiPrompts = myCommand.process(promptId)
      promptsToAdd.push(...multiPrompts)
      promptId += multiPrompts.length + 2
    }
  } else if (appState === 'await') {
    if (promptText === 'exit') {
      const exitPrompt: Prompt = {
        id: promptId,
        prompt: 'Exiting...',
        source: 'system',
        timestamp: new Date(),
        hideTimestamp: false,
        link: '',
      }
      promptsToAdd.push(exitPrompt)
    } else {
      if (!currentCommand?.awaitCommand) return
      const result = currentCommand.awaitCommand(promptText)
      const resultPrompt: Prompt = {
        id: promptId,
        prompt: `Result: ${result}`,
        source: 'system',
        timestamp: new Date(),
        hideTimestamp: false,
        link: '',
      }
      promptsToAdd.push(resultPrompt)
    }
    setAppState('standard')
    setCurrentCommand(null)
  }
  if (!isClear) {
    setPromptList([...promptList, ...promptsToAdd])
  } else {
    setPromptList([])
  }
  setPromptText('')
  const monitor = document.getElementById('monitor')
  if (monitor) {
    setTimeout(() => {
      monitor.scrollTo(0, monitor.scrollHeight)
    }, 5)
  }
}

function findCommand(command: string, currentId: number) {
  let foundCommand: BaseCommand = {
    command: 'invalid',
    process: () => {
      return {
        id: currentId,
        prompt: `Invalid Command. '${command}' does not exist.`,
        source: 'system',
      }
    },
    type: 'simple',
    regex: /1/,
    description: 'Only used here.',
    awaitCommand: () => null,
    hide: null,
  }
  allCommands.forEach((entry) => {
    if (entry.command === command) {
      foundCommand = entry
    }
  })
  return foundCommand
}
