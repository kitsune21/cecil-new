export type Prompt = {
  id: number
  prompt: string
  source: string
  timestamp: Date
  hideTimestamp: boolean
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
