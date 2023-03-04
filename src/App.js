import React, { useState } from 'react'
import { allCommands } from './commands/commandList'
import styled, { createGlobalStyle } from 'styled-components'
import RobotoCondensed from './fonts/RobotoCondensed-Regular.ttf'
import EBGaramond from './fonts/RobotoCondensed-Regular.ttf'

// eslint-disable-next-line no-unused-vars
const GlobalStyles = createGlobalStyle`
@font-face {
  src: url(${RobotoCondensed}) format('ttf');
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
}
@font-face {
  src: url(${EBGaramond}) format('ttf');
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
}
`

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
  background-color: black;
  overflow-y: auto;
  border: 1px solid black;
  border-radius: 8px;
`

const ComputerBottom = styled.div`
  display: flex;
  justify-content: center;
  background-color: beige;
  height: 50px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-radius: 0 0 12px 12px;
  margin: 0 10px 0 10px;
  font-family: EBGaramond;
`

const Text = styled.p`
  color: green;
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

const Prompt = styled.input`
  border: none;
  background-color: black;
  color: white;
  margin-left: 5px;
`

const PromptPreText = styled.label`
  color: green;
  margin-left: 10px;
`

function App() {

  const [promptText, setPromptText] = useState('')
  const [promptList, setPromptList] = useState([])
  const [appState, setAppState] = useState('standard')
  const [currentCommand, setCurrentCommand] = useState(null)
  const [arrowSelect, setArrowSelect] = useState(0)
  const commandPreText = '--  '
  const userPreText = '@ '

  function handlePromptText(e) {
    const value = e.target.value
    if(appState === 'await') {
      const checkCommandRegex = new RegExp(currentCommand.regex)
      const exitRegex = new RegExp(/^e?x?i?t?$/)
      if(checkCommandRegex.test(value)) {
        setPromptText(value)
      } else if(value === '') {
        setPromptText(value)
      } else if(exitRegex.test(value)) {
        setPromptText(value)
      }
    } else {
      setPromptText(value)
    }
  }

  function handlePromptSubmit(e) {
    e.preventDefault()
    processCommand()
  }

  function processCommand() {
    let promptId = promptList.length + 1
    let promptsToAdd = []
    let isClear = false
    const userPrompt = {
      id: promptId,
      prompt: promptText,
      source: appState === 'await' ? 'response' : 'user'
    }
    promptsToAdd.push(userPrompt)
    promptId += 1
    const commandLower = promptText.toLocaleLowerCase().trim()
    if(appState === 'standard') {
      const myCommand = findCommand(commandLower, promptId)
      if(myCommand.type === 'simple') {
        const newPrompt = myCommand.process(promptId)
        promptsToAdd.push(newPrompt)
      } else if(myCommand.type === 'complex') {
        if(myCommand.command === 'clear') {
          myCommand.process(() => {
            setAppState('standard')
            setArrowSelect(0)
            isClear = true
          })
        } else if(myCommand.command === 'list') {
          myCommand.process(() => {
            let listOfCommands = []
            allCommands.forEach(entry => {
              if(!entry.hide) {
                let listEntry = {
                  id: promptId,
                  prompt: `${entry.command} - ${entry.description}`,
                  source: 'system'
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
              source: 'system'
            }
            promptsToAdd.push(instructionEntry)
            setAppState('await')
            setCurrentCommand(myCommand)
          })
        } 
      } else if(myCommand.type === 'multi') {
        let multiPrompts = myCommand.process(promptId)
        promptsToAdd.push(...multiPrompts)
        promptId += multiPrompts.length + 2
      } 
    } else if(appState === 'await') {
      if(promptText === 'exit') {
        const exitPrompt = {
          id: promptId,
          prompt: 'Exiting...',
          source: 'system'
        }
        promptsToAdd.push(exitPrompt)
      } else {
        let result = currentCommand.awaitCommand(promptText)
        const resultPrompt = {
          id: promptId,
          prompt: `Result: ${result}`,
          source: 'system'
        }
        promptsToAdd.push(resultPrompt)
      }
      setAppState('standard')
      setCurrentCommand(null)
    }
    if(!isClear) {
      setPromptList([...promptList, ...promptsToAdd])
    } else {
      setPromptList([])
    }
    setPromptText('')
  }

  function findCommand(command, currentId) {
    let foundCommand = {
      process: () => {return { id: currentId, prompt: `Invalid Command. '${command}' does not exist.`, source: 'system'}},
      type: 'simple'
    }
    allCommands.forEach(entry => {
      if(entry.command === command) {
        foundCommand = entry
      }
    })
    return foundCommand
  }

  function handleKeyDown(e) {
    if(promptList.length === 0 || appState === 'await') {
      return
    }
    const filteredPromptList = promptList.slice(0).filter(prompt => prompt.source === 'user').reverse()
    if (e.code === "ArrowUp") { 
      if(filteredPromptList.length < arrowSelect + 1) {
        return
      }
      setArrowSelect(arrowSelect + 1)
      setPromptText(filteredPromptList[arrowSelect].prompt)
    } else if(e.code === "ArrowDown") {
      if(arrowSelect - 1 < 0) {
        return
      }
      setPromptText(filteredPromptList[arrowSelect - 1].prompt)
      setArrowSelect(arrowSelect - 1)
    }
  }

  return (
    <div className="App">
      <Computer>
        <ComputerMonitor>
          <Text>WELCOME TO CECIL.OS!</Text>
          <Text>Use the "list" command to see what I can do!</Text>
          <Text>Commands are not case-sensitive.</Text>
          {
            promptList.map(prompt =>
              <Text key={prompt.id}>{prompt.source === 'user' ? userPreText : commandPreText}{prompt.prompt}</Text>
            )
          }
          <PromptBox onSubmit={handlePromptSubmit}>
            <PromptPreText htmlFor='prompt'>$<Prompt id='prompt' value={promptText} onChange={handlePromptText} autoFocus onKeyDown={handleKeyDown}/></PromptPreText>
            <button type='submit' hidden/>
          </PromptBox>
        </ComputerMonitor>
      </Computer>
      <ComputerBottom>
        Thomas Computer Systems v1.0
      </ComputerBottom>
    </div>
  );
}

export default App;
