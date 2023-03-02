import React, { useState } from 'react'
import { allCommands } from './commands/commandList'
import styled from 'styled-components'

const Computer = styled.div`
  border: 20px solid beige;
  height: 85vh;
`

const ComputerMonitor = styled.div`
  height: 100%;
  background-color: black;
  overflow-y: auto;
`

const Text = styled.p`
  color: green;
  margin: 0;
  padding-left: 10px;
  padding-top: 5px;
`

const PromptBox = styled.form`
  margin-top: 5px;
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
  const commandPreText = '--  '
  const userPreText = '@ '

  function handlePromptText(e) {
    const value = e.target.value
    if(appState === 'await') {
      const checkCommandRegex = new RegExp(currentCommand.regex)
      if(checkCommandRegex.test(value)) {
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
    const userPrompt = {
      id: promptId,
      prompt: `${userPreText}${promptText}`
    }
    promptId += 1
    const commandLower = promptText.toLocaleLowerCase()
    if(appState === 'standard') {
      const myCommand = findCommand(commandLower)
      if(myCommand.type === 'simple') {
       const newPrompt = {
          id: promptId,
          prompt: `${commandPreText}${myCommand.process()}`
        }
        setPromptList([...promptList, userPrompt, newPrompt])
        setPromptText('')
      } else if(myCommand.type === 'complex') {
        if(myCommand.command === 'clear') {
          myCommand.process(() => {
            setPromptList([])
            setAppState('standard')
          })
        } else if(myCommand.command === 'list') {
          myCommand.process(() => {
            let listOfCommands = []
            allCommands.forEach((entry, i) => {
              let listEntry = {
                id: promptId,
                prompt: `${commandPreText}${entry.command} - ${entry.description}`
              }
              promptId += 1
              listOfCommands.push(listEntry)
            })
            setPromptList([...promptList, userPrompt, ...listOfCommands])
          })
        } else if(myCommand.command === 'calculate') {
          myCommand.process(() => {
            const instructionEntry = {
              id: promptId,
              prompt: `${commandPreText}${myCommand.description}`
            }
            setPromptList([...promptList, userPrompt, instructionEntry])
            setAppState('await')
            setCurrentCommand(myCommand)
          })
        }
      }
    } else if(appState === 'await') {
      let result = currentCommand.awaitCommand(promptText)
      const resultPrompt = {
        id: promptId,
        prompt: `${commandPreText}Result: ${result}`
      }
      setPromptList([...promptList, userPrompt, resultPrompt])
      setAppState('standard')
      setCurrentCommand(null)
    }
    setPromptText('')
  }

  function findCommand(command) {
    let foundCommand = {
      process: () => `Invalid Command. '${command}' does not exist.`,
      type: 'simple'
    }
    allCommands.forEach(entry => {
      if(entry.command === command) {
        foundCommand = entry
      }
    })
    return foundCommand
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
              <Text key={prompt.id}>{prompt.prompt}</Text>
            )
          }
          <PromptBox onSubmit={handlePromptSubmit}>
            <PromptPreText htmlFor='prompt'>$<Prompt id='prompt' value={promptText} onChange={handlePromptText} autoFocus/></PromptPreText>
            <button type='submit' hidden/>
          </PromptBox>
        </ComputerMonitor>
      </Computer>
    </div>
  );
}

export default App;
