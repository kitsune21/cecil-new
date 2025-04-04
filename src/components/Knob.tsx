import React from 'react'
import styled from 'styled-components'

const KnobStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const KnobLabel = styled.p`
  margin: 0;
  padding: 0;
`

const KnobButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2px;
`

const KnobButton = styled.button`
  border: none;
  border-bottom: 2px solid black;
  border-radius: 0 0 18px 18px;
  background-color: beige;
`

interface KnobProps {
  label: string
  value: number
  setValue: (value: number) => void
  min: number
  max: number
}

const Knob = ({ label, value, setValue, min, max }: KnobProps) => {
  function handleAddButton() {
    if (value < max) {
      setValue(value + 0.05 * max)
    }
  }

  function handleMinusButton() {
    if (value > min) {
      setValue(value - 0.05 * max)
    }
  }

  return (
    <KnobStyle>
      <KnobLabel>{label}</KnobLabel>
      <KnobButtons>
        <KnobButton onClick={handleMinusButton}>-</KnobButton>
        <KnobButton onClick={handleAddButton}>+</KnobButton>
      </KnobButtons>
    </KnobStyle>
  )
}

export default Knob
