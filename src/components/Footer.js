import React from 'react'
import styled from 'styled-components'

const Footer = () => {

    const Copyright =styled.div`
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 25px;
        text-align: center;
        font-size: 100%;
        z-index: 100;
    `;
  return (
    <Copyright>Copyright &copy; 2021, Guarapo Labs and Miguel G | All rights reserved.</Copyright>
  )
}

export default Footer