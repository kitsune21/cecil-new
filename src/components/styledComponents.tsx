import styled from 'styled-components'
import { ColorProps, TextColor, InputColorProps } from '../Types'

export const Computer = styled.div`
  padding: 20px;
  border: 2px solid black;
  border-bottom: none;
  border-radius: 12px 12px 0 0;
  background-color: beige;
  height: 85vh;
  margin: 10px 10px 0 10px;
`

export const ComputerMonitor = styled.div`
  height: 100%;
  background-color: ${(props: ColorProps) =>
    `rgb(${props.backgroundColor}, ${props.backgroundColor}, ${props.backgroundColor})`};
  overflow-y: auto;
  border: 1px solid black;
  border-radius: 8px;
`

export const ComputerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
  height: 50px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-radius: 0 0 12px 12px;
  margin: 0 10px 0 10px;
  font-family: EBGaramond;
`

export const KnobRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 90%;
`

export const Text = styled.p`
  color: rgb(0, ${(props: TextColor) => props.textColor}, 0);
  margin: 0;
  padding-left: 10px;
  padding-top: 5px;
  font-family: Roboto Condensed;
`

export const PromptBox = styled.form`
  margin-top: 5px;
  margin-bottom: 10px;
  width: 100%;
`

export const PromptInput = styled.input`
  border: none;
  background-color: ${(props: InputColorProps) =>
    `rgb(${props.backgroundColor}, ${props.backgroundColor}, ${props.backgroundColor})`};
  color: rgb(0, ${(props: InputColorProps) => props.textColor}, 0);
  margin-left: 5px;
`

export const PromptPreText = styled.label`
  color: rgb(0, ${(props: TextColor) => props.textColor}, 0);
  margin-left: 10px;
`
