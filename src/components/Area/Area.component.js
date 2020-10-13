import React from 'react'
import styled from 'styled-components'
import miss from './../../assets/Miss.png'
import hit from './../../assets/Hit.png'

const AreaWrapper = styled.div`
  border: solid 1px grey;
  height: 40px;
  width: 40px;
`
const Area = ({onClick, cell}) => {
  console.log(cell)
  let imageToRender = null
  switch(cell){
    case 0: 
      imageToRender = <img style={{width:38}} src={miss} alt="miss"/>
      break
    case 1:
      imageToRender = <img style={{width:38}} src={hit} alt="hit"/>
      break
    default:
      imageToRender = <></>
  }
  return <AreaWrapper onClick={onClick}>
    {imageToRender}
  </AreaWrapper>
}

export default Area