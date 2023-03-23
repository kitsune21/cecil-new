import React, { useState } from 'react'
import { allCommands } from './commands/commandList'
import styled from 'styled-components'
import Knob from './components/Knob'
import { BaseCommand, Prompt, ColorProps, TextColor } from './Types'

const Computer = styled.div`
  padding: 20px;
  border: 2px solid black;
  border-bottom: none;
  border-radius: 12px 12px 0 0;
  background-color: beige;
  height: 85vh;
  margin: 10px 10px 0 10px;
`

const ComputerMonitor = styled.div`
  height: 100%;
  background-color: ${(props: ColorProps) =>
    `rgb(${props.backgroundColor}, ${props.backgroundColor}, ${props.backgroundColor})`};
  overflow-y: auto;
  border: 1px solid black;
  border-radius: 8px;
`

const ComputerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
  height: 50px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-radius: 0 0 12px 12px;
  margin: 0 10px 0 10px;
  font-family: EBGaramond;
`

const KnobRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 90%;
`

const Text = styled.p`
  color: rgb(0, ${(props: TextColor) => props.textColor}, 0);
  margin: 0;
  padding-left: 10px;
  padding-top: 5px;
  font-family: Roboto Condensed;
`

const PromptBox = styled.form`
  margin-top: 5px;
  margin-bottom: 10px;
  width: 100%;
`

const PromptInput = styled.input`
  border: none;
  background-color: ${(props: ColorProps) =>
    `rgb(${props.backgroundColor}, ${props.backgroundColor}, ${props.backgroundColor})`};
  color: white;
  margin-left: 5px;
`

const PromptPreText = styled.label`
  color: rgb(0, ${(props: TextColor) => props.textColor}, 0);
  margin-left: 10px;
`

function App() {
  const [promptText, setPromptText] = useState('')
  const [promptList, setPromptList] = useState<Prompt[]>([])
  const [appState, setAppState] = useState('standard')
  const [currentCommand, setCurrentCommand] = useState<BaseCommand | null>(null)
  const [arrowSelect, setArrowSelect] = useState(0)
  const [textColor, setTextColor] = useState(204)
  const [backgroundColor, setBackgroundColor] = useState(0)
  const commandPreText = '--  '
  const userPreText = '@ '

  function handlePromptText(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (appState === 'await') {
      if (!currentCommand || !currentCommand.regex) return
      const checkCommandRegex = new RegExp(currentCommand.regex)
      const exitRegex = new RegExp(/^e?x?i?t?$/)
      if (checkCommandRegex.test(value)) {
        setPromptText(value)
      } else if (value === '') {
        setPromptText(value)
      } else if (exitRegex.test(value)) {
        setPromptText(value)
      }
    } else {
      setPromptText(value)
    }
  }

  function handlePromptSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    processCommand()
  }

  function processCommand() {
    let promptId: number = promptList.length + 1
    const promptsToAdd: Prompt[] = []
    let isClear = false
    const userPrompt: Prompt = {
      id: promptId,
      prompt: promptText,
      source: appState === 'await' ? 'response' : 'user',
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
                }
                promptId += 1
                listOfCommands.push(listEntry)
              }
            })
            promptsToAdd.push(...listOfCommands)
          })
        } else {
          myCommand.process(() => {
            const instructionEntry = {
              id: promptId,
              prompt: myCommand.description,
              source: 'system',
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
        const exitPrompt = {
          id: promptId,
          prompt: 'Exiting...',
          source: 'system',
        }
        promptsToAdd.push(exitPrompt)
      } else {
        if (!currentCommand?.awaitCommand) return
        const result = currentCommand.awaitCommand(promptText)
        const resultPrompt = {
          id: promptId,
          prompt: `Result: ${result}`,
          source: 'system',
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

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (promptList.length === 0 || appState === 'await') {
      return
    }
    const filteredPromptList: Prompt[] = promptList
      .slice(0)
      .filter((prompt: Prompt) => prompt.source === 'user')
      .reverse()
    if (e.code === 'ArrowUp') {
      if (filteredPromptList.length < arrowSelect + 1) {
        return
      }
      setArrowSelect(arrowSelect + 1)
      setPromptText(filteredPromptList[arrowSelect].prompt)
    } else if (e.code === 'ArrowDown') {
      if (arrowSelect - 1 < 0) {
        return
      }
      setPromptText(filteredPromptList[arrowSelect - 1].prompt)
      setArrowSelect(arrowSelect - 1)
    }
  }

  return (
    <div>
      <Computer>
        <ComputerMonitor backgroundColor={backgroundColor}>
          <Text textColor={textColor}>WELCOME TO CECIL.OS!</Text>
          <Text textColor={textColor}>
            Use the &quot;list&quot; command to see what I can do!
          </Text>
          <Text textColor={textColor}>Commands are not case-sensitive.</Text>
          {promptList.map((prompt: Prompt) => (
            <Text key={prompt.id} textColor={textColor}>
              {prompt.source === 'user' ? userPreText : commandPreText}
              {prompt.prompt}
            </Text>
          ))}
          <PromptBox onSubmit={handlePromptSubmit}>
            <PromptPreText htmlFor="prompt" textColor={textColor}>
              $
              <PromptInput
                id="prompt"
                value={promptText}
                onChange={handlePromptText}
                autoFocus
                onKeyDown={handleKeyDown}
                backgroundColor={backgroundColor}
              />
            </PromptPreText>
            <button type="submit" hidden />
          </PromptBox>
        </ComputerMonitor>
      </Computer>
      <ComputerBottom>
        Thomas Computer Systems v1.0
        <KnobRow>
          <Knob
            label="Color"
            value={textColor}
            setValue={setTextColor}
            min={0}
            max={256}
          />
          <Knob
            label="Contrast"
            value={backgroundColor}
            setValue={setBackgroundColor}
            min={0}
            max={256}
          />
        </KnobRow>
      </ComputerBottom>
    </div>
  )
}

export default App
