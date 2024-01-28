import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main'
    'footer footer';
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-areas:
      'header'
      'main'
      'sidebar'
      'footer';
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto auto;
  }
`

const Header = styled.header`
  grid-area: header;
  width: 100%;
  height: 50px;
  background-color: #333;
`

const Sidebar = styled.aside`
  grid-area: sidebar;
  /* Add your custom styles here */
`

const Main = styled.main`
  grid-area: main;
  /* Add your custom styles here */
`

const Footer = styled.footer`
  grid-area: footer;
  /* Add your custom styles here */
`

function Template() {
  return (
    <Layout>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Template
