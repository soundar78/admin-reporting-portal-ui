import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faCoffee } from '@fortawesome/free-solid-svg-icons'

const CardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  background-color: ${({ $isSelected }) =>
    $isSelected ? 'lightgreen' : '#fff'};
  color: ${({ $isSelected }) => ($isSelected ? 'white' : 'black')};
  transform: ${({ $isSelected }) => ($isSelected ? 'scale(1.05)' : 'scale(1)')};
  box-shadow: ${({ $isSelected }) =>
    $isSelected ? '0 5px 15px rgba(0, 0, 0, 0.2)' : 'none'};

  &:hover div {
    opacity: 1;
  }
`

const IconContainer = styled.div`
  position: absolute;
  top: ${({ $isSelected }) => ($isSelected ? '10px' : '50%')};
  left: 50%;
  transform: translate(
    -50%,
    ${({ $isSelected }) => ($isSelected ? '0' : '-50%')}
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`

const Card = ({ value, onClick, icon = faCoffee }) => {
  const [isSelected, setIsSelected] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleSelect = (e) => {
    e.stopPropagation()
    setIsSelected(true)
    onClick && onClick(value)
  }

  const handleDeselect = (e) => {
    e.stopPropagation()
    setIsSelected(false)
  }

  return (
    <CardContainer
      $isSelected={isSelected}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(isSelected || isHovered) && <FontAwesomeIcon icon={icon} />}
      <IconContainer $isSelected={isSelected}>
        <FontAwesomeIcon icon={faCheck} onClick={handleSelect} />
        <FontAwesomeIcon icon={faTimes} onClick={handleDeselect} />
      </IconContainer>
    </CardContainer>
  )
}

export default Card
