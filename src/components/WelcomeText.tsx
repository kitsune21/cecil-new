import React from "react"
import { Text } from "./styledComponents"

interface WelcomeTextProps {
    textColor: number
}

const WelcomeText = ({textColor}: WelcomeTextProps) => {
    return(
        <>
            <Text textColor={textColor}>WELCOME TO CECIL.OS!</Text>
            <Text textColor={textColor}>
                Use the &quot;list&quot; command to see what I can do!
            </Text>                   
        </>
    )
}

export default WelcomeText