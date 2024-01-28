import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import theme from 'theme'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  margin: auto;
  display: block;
  font-size: 24px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  color: ${theme.colors.primary},
  animation: ${spin} 2s linear infinite;
`

// Create a LoaderContainer component to center the spinner and text
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const LoaderText = styled.div`
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
`

const Loader = () => (
  <LoaderContainer>
    <Spinner>
      <FontAwesomeIcon icon={faSpinner} />
    </Spinner>
    <LoaderText>Loading</LoaderText>
  </LoaderContainer>
)

export default Loader
