import React from 'react'
import styled from 'styled-components'

import { FcLike } from "react-icons/fc"

export const Footer = () => {
  return (
    <Container className="container"> 
        Coded with <FcLike  className='heart'> </FcLike > by Hash
    </Container>
  )
}


const Container = styled.div`
    text-align: center;
    padding-bottom: 1em;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 1px;
    opacity: .7;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .heart{
        margin-inline: .5em .75em;
    }

    @media (max-width: 500px) {font-size: .75em;}
`;
