import React from 'react'
import { Text } from './styledComponents'

interface WelcomeTextProps {
  textColor: number
}

const WelcomeText = ({ textColor }: WelcomeTextProps) => {
  return (
    <>
      <Text textColor={textColor}>WELCOME TO CECIL.OS!</Text>
    </>
  )
}

export default WelcomeText
