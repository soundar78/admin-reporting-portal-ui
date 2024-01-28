/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './styles.css'
import Logo from 'assets/img/logo.png'
import './header-styles.css'

const Header = () => {
  return (
    <>
      <header id="header">
        <div id="logo-group">
          <span id="logo">
            <a href="/">
              <img
                style={{ width: '25px', padding: '5px' }}
                src={Logo}
                alt="logo"
              />
            </a>
          </span>
          <label
            style={{
              color: 'white',
              marginTop: '11%',
              fontSize: 'medium',
              fontWeight: 'bold'
            }}
          >
            V-Trac
          </label>
        </div>
      </header>
    </>
  )
}

export default Header
