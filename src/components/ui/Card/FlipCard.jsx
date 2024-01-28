import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const CardContainer = styled.div`
//   background-color: transparent;
//   width: 300px;
//   height: 300px;
//   perspective: 1000px;
// `

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`
const CardContainer = styled.div`
  perspective: 1000px;
  &:hover {
    ${Card} {
      transform: rotateY(180deg);
    }
  }
`

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`

const CardFront = styled(CardFace)`
  background-color: #bbb;
  color: black;
`

const CardBack = styled(CardFace)`
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
`

const FlipCard = () => (
  <CardContainer>
    <Card>
      <CardFront>
        <h1>Front</h1>
        <FontAwesomeIcon icon={faCoffee} />
      </CardFront>
      <CardBack>
        <h1>Back</h1>
        <FontAwesomeIcon icon={faCoffee} />
      </CardBack>
    </Card>
  </CardContainer>
)

export default FlipCard
