import React from 'react'
import styled from 'styled-components'
import PlayerScore from '../PlayerScore/PlayerScore.component'
import ScoreDetail from '../ScoreDetail'

const PlayerAreaWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items:center;
  justify-content: center;
`


const PlayerScoreWrapper = styled.div`
  display: flex;
`
const PlayerArea = () => {
  return <PlayerAreaWrapper>
    <PlayerScoreWrapper>
      <PlayerScore bgcolor="gold" playerNumber={1} score={0}/>
      <PlayerScore bgcolor="darkturquoise" playerNumber={2} score={0}/>
    </PlayerScoreWrapper>
    <ScoreDetail shipType='destroyer' available={[1,2,3,4,5]} hits={[]}/>
    <ScoreDetail shipType='battleship' available={[1,2,3,4]} hits={[]}/>
    <ScoreDetail shipType='cruiser' available={[1,2,3]} hits={[]}/>
    <ScoreDetail shipType='submarine' available={[1,2]}hits={[]}/>
    <ScoreDetail shipType='carrier' available={[]} hits={[1,2]}/>

  </PlayerAreaWrapper>
}

export default PlayerArea