import React, { useState, useEffect } from 'react'
import Knob from './components/Knob'
import ScreenshotViewer from './components/ScreenshotViewer'
import WelcomeText from './components/WelcomeText'
import BootUpText from './components/BootUpText'
import { BaseCommand, Prompt } from './Types'
import { processCommand } from './commands/processCommand'
import {
  Computer,
  ComputerBottom,
  ComputerMonitor,
  Text,
  PromptBox,
  PromptInput,
  PromptPreText,
  KnobRow,
  PromptLink,
} from './components/styledComponents'

function App() {
  const [promptText, setPromptText] = useState('')
  const [promptList, setPromptList] = useState<Prompt[]>([])
  const [appState, setAppState] = useState('standard')
  const [currentCommand, setCurrentCommand] = useState<BaseCommand | null>(null)
  const [arrowSelect, setArrowSelect] = useState(0)
  const [textColor, setTextColor] = useState(204)
  const [backgroundColor, setBackgroundColor] = useState(0)
  const [isBootUp, setIsBootUp] = useState(false)
  const commandPreText = '--  '
  const userPreText = '$ '
  const bootTime = 5000

  useEffect(() => {
    setTimeout(() => {
      setIsBootUp(true)
    }, bootTime)
  })

  function handlePromptText(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (appState === 'await') {
      if (currentCommand && currentCommand.regex) {
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
    } else {
      setPromptText(value)
    }
  }

  function handlePromptSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    processCommand(
      promptList,
      promptText,
      appState,
      currentCommand,
      setAppState,
      setArrowSelect,
      setCurrentCommand,
      setPromptList,
      setPromptText,
    )
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

  function displayTimeStamp(timestamp: Date): string {
    const intlTime = new Intl.DateTimeFormat(undefined, {
      timeStyle: 'short',
    }).format(timestamp)
    return intlTime
  }

  return (
    <div data-testid="app">
      <Computer>
        <ComputerMonitor id="monitor" backgroundColor={backgroundColor}>
          {!isBootUp ? (
            <BootUpText textColor={textColor} bootTime={bootTime} />
          ) : (
            <WelcomeText textColor={textColor} />
          )}
          {promptList.map((prompt: Prompt) => (
            prompt.source === "screenshots" ?
            <ScreenshotViewer key={prompt.id} textColor={textColor} backgroundColor={backgroundColor} prompt={prompt} commandPreText={commandPreText}/>
            :
            <Text
              key={prompt.id}
              textColor={textColor}
              id={prompt.id.toString()}
            >
              {prompt.source !== 'user' ? (
                <>
                  <span>{commandPreText}</span>
                  {!prompt.hideTimestamp ? (
                    <span> {displayTimeStamp(prompt.timestamp)} </span>
                  ) : null}
                </>
              ) : (
                userPreText
              )}
              {
                prompt.link ?
                <PromptLink textColor={textColor} href={prompt.link} target='_blank' rel="noreferrer noopener">{prompt.prompt}</PromptLink>
                : <span>{prompt.prompt}</span>
              }
            </Text>
          ))}
          {isBootUp ? (
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
                  textColor={textColor}
                />
              </PromptPreText>
              <button type="submit" hidden />
            </PromptBox>
          ) : null}
        </ComputerMonitor>
      </Computer>
      <ComputerBottom>
        Thomas Computer Systems v1.1
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
