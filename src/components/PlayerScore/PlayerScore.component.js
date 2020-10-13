import React from 'react'
import styled from 'styled-components'

const PlayerScoreWrapper = styled.div`
  background-color: ${p => p.bgcolor};
  font-size: 30px;
  height: 220px;
  display:flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 5em;
`

const PlayerScore = ({score, bgcolor, playerNumber}) => {
  return <PlayerScoreWrapper bgcolor={bgcolor}>
    <h2>{score}</h2>
    <span style={{borderTop:'solid 1px black'}}> player {playerNumber}</span>
  </PlayerScoreWrapper>
}

export default PlayerScore