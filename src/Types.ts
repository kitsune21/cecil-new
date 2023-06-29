import PhotoAlbum from './components/PhotoAlbum'

export type Prompt = {
  id: number
  prompt: string
  source: string
  timestamp: Date
  hideTimestamp: boolean
  link: string
}

export type BaseCommand = {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  process: any
  command: string
  description: string
  regex: RegExp | null
  hide: boolean | null
  awaitCommand:
    | (() => void)
    | ((prompt: string) => Prompt)
    | ((prompt: string) => string)
    | null
}

export interface SimpleCommand extends BaseCommand {
  process: (promptId: number) => Prompt
}

export interface ComplexCommand extends BaseCommand {
  process: (upperProcess: () => void) => void
}

export type ColorProps = {
  backgroundColor: number
}

export type TextColor = {
  textColor: number
}

export type InputColorProps = {
  backgroundColor: number
  textColor: number
}

export type ScreenshotType = {
  id: number
  location: string
  description: string
  minified: string
  alt: string
}

export type PhotoAlbumProps = {
  isDraggedOpen: boolean
}

export type PhotoProps = {
  index: number
  pictureId: number
  lastId: number
}
