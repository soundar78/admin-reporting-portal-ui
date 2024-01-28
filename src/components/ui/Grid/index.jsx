import styled from 'styled-components'

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;

  ${({ span }) =>
    span &&
    `
    flex-basis: ${
      (span / 12) * 100 - 20
    }%; /* Subtract the total column margin (20px) */
  `}
`

export { Grid, Row, Column }
