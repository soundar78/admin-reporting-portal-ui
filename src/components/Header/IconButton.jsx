import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const Icon = styled.svg`
  width: 24px;
  height: 24px;
`

const IconButton = ({ icon, onClick, ...props }) => (
  <Button onClick={onClick}>
    <Icon icon={icon} />
  </Button>
)

export default IconButton
