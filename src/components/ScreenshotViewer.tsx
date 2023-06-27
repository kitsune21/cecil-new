import React, {useState} from "react"
import { ScreenshotButton, ScreenshotViewerDialog, ScreenshotCarousel, ScreenshotImage, ScreenshotCarouselItem, ScreenshotDescription } from "./styledComponents"
import { Prompt } from "../Types"
import Screenshots from "../screenshots/journeys/screenshots.json"
import { ScreenshotType } from "../Types"

interface ScreenshotViewerProps {
    textColor: number
    backgroundColor: number
    prompt: Prompt
    commandPreText: string
}

const ScreenshotViewer = ({textColor, backgroundColor, prompt, commandPreText} : ScreenshotViewerProps) => {
    const [openScreenshotViewer, setOpenScreenshotViewer] = useState(false)
    const ScreenshotList: ScreenshotType[] = Screenshots

    return(
        <>
            <ScreenshotButton textColor={textColor} backgroundColor={backgroundColor} onClick={() => setOpenScreenshotViewer(!openScreenshotViewer)}><span>{commandPreText} {prompt.prompt}</span></ScreenshotButton>
            <ScreenshotViewerDialog open={openScreenshotViewer} textColor={textColor} backgroundColor={backgroundColor}>
            <ScreenshotButton textColor={textColor} backgroundColor={backgroundColor} onClick={() => setOpenScreenshotViewer(!openScreenshotViewer)}>Click here to close</ScreenshotButton>
                <ScreenshotCarousel>
                    {
                        ScreenshotList.map(screenshot =>
                            <ScreenshotCarouselItem key={screenshot.id}>
                                <ScreenshotImage src={require(`../screenshots/journeys/${screenshot.location}`)} alt={screenshot.alt} loading="lazy"/>
                                <ScreenshotDescription textColor={textColor}>{screenshot.description}</ScreenshotDescription>
                            </ScreenshotCarouselItem>    
                        )
                    }
                </ScreenshotCarousel>
            </ScreenshotViewerDialog>
        </>
    )
}

export default ScreenshotViewer