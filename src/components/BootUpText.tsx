import React, { useState, useEffect } from 'react'
import { Text } from './styledComponents'
import Loading from './Loading'

interface BootUpProps {
  textColor: number
  bootTime: number
}

type BootUpObj = {
  id: number
  text: string
  active: boolean
}

const BootUpText = ({ textColor, bootTime }: BootUpProps) => {
  const textList: BootUpObj[] = [
    { id: 1, text: 'Booting up system', active: false },
    { id: 2, text: 'Checking system configuration', active: false },
    { id: 3, text: 'Initializing drivers', active: false },
    { id: 4, text: 'Executing start.exe', active: false },
  ]
  const [bootUpTextList, setBootUpTextList] = useState(textList)

  useEffect(() => {
    bootUpTextList.forEach((textObj) => {
      const time = (bootTime / (bootUpTextList.length + 1)) * textObj.id
      setTimeout(() => {
        const bootUpListAtThisPoint: BootUpObj[] = []
        bootUpTextList.forEach((textObjSecond) => {
          if (textObj.id >= textObjSecond.id) {
            textObjSecond.active = true
          }
          bootUpListAtThisPoint.push(textObjSecond)
        })
        setBootUpTextList(bootUpListAtThisPoint)
      }, time)
    })
  }, [])

  return (
    <div data-testid="bootup">
      {bootUpTextList.map((text) => (
        <React.Fragment key={text.id}>
          {text.active ? <Text textColor={textColor}>{text.text} <Loading time={(bootTime / (bootUpTextList.length + 1))} id={text.id}/></Text> : null}
        </React.Fragment>
      ))}
    </div>
  )
}

export default BootUpText
