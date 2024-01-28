import styled, { css } from 'styled-components'

const ButtonStyles = {
  primary: css`
    background-color: #007bff;
    color: white;
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
  `,
  styled: css`
    background-color: #28a745;
    color: white;
  `,
  text: css`
    background-color: transparent;
    color: #007bff;
  `,
  ghost: css`
    background-color: transparent;
    color: #6c757d;
    border: 1px solid #6c757d;
  `
}

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  ${({ variant }) => ButtonStyles[variant] || ButtonStyles.primary}

  svg {
    margin-right: 0.5rem;
    width: 14px;
    height: 14px;
  }
`

export const IconButton = ({ icon: Icon, children, ...props }) => (
  <Button {...props}>
    <Icon />
    {children}
  </Button>
)
