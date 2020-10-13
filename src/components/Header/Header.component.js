import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 1fr 1fr 1fr;
  background-color: mediumpurple;
  min-height: 4em;

`

const StyledButton = styled.button`
  margin: 1em 1em;
`

const StyledInput = styled.input`
  margin: 1em 1em;
`
const Header = () => {
  return <HeaderWrapper>
    <StyledButton/>
    <StyledInput></StyledInput>
    <StyledButton/>
    <StyledButton/>
    <StyledButton/>
    <StyledButton/>
  </HeaderWrapper>
}

export default Header