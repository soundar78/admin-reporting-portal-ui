import styled from 'styled-components'

const SvgIcon = styled.svg`
  width: 24px;
  height: 24px;
`

export const TickIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M2 20 L12 28 30 4" stroke="#000" strokeWidth="2" fill="none" />
  </SvgIcon>
)

export const CrossIcon = (props) => (
  <SvgIcon {...props}>
    <path
      d="M2 2 L22 22 M22 2 L2 22"
      stroke="#000"
      strokeWidth="2"
      fill="none"
    />
  </SvgIcon>
)
