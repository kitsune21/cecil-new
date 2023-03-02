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
  const commandPreText = '--  '
  const userPreText = '@ '

  function handlePromptText(e) {
    const value = e.target.value
    if(appState === 'await') {
      const checkCommandRegex = new RegExp(currentCommand.regex)
      if(checkCommandRegex.test(value)) {
        setPromptText(value)
      } else if(value === '') {
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
      source: 'user'
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
      let result = currentCommand.awaitCommand(promptText)
      const resultPrompt = {
        id: promptId,
        prompt: `Result: ${result}`
      }
      promptsToAdd.push(resultPrompt)
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
      process: () => {return { id: currentId, prompt: `Invalid Command. '${command}' does not exist.`,}},
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
              <Text key={prompt.id}>{prompt.source === 'user' ? userPreText : commandPreText}{prompt.prompt}</Text>
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
