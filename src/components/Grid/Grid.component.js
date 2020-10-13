import React from 'react'
import styled from 'styled-components'

const Wrapper =  styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: solid 5px orange;
  max-height: 420px;
  max-width: 420px;
  grid-gap:0px
`
const Grid = ({children}) => {
  return <Wrapper>
    {children}
    </Wrapper>  
}
export default Grid