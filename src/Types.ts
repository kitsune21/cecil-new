export type Prompt = {
    id: number;
    prompt: string;
    source: string;
  }
  
export type Command = {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    process: any;
    command: string;
    description: string;
    regex: RegExp;
    awaitCommand: (promptText: string) => void;
    hide: boolean | null;
  }
  
export type ColorProps = {
    backgroundColor: number;
  }
  
export type TextColor = {
    textColor: number;
  }