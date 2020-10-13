import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';
import Area from './components/Area';
import styled from 'styled-components';
import Header from './components/Header';
import PlayerArea from './components/PlayerArea';

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;  
`
const PlaygoundWrapper = styled.div`
  padding-top: 2em;
  display: grid;
  grid-template-columns: 2fr 3fr;  
`

function App() {
  const [positions, setpositions] = React.useState([
  { "ship": "carrier", "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] },
  { "ship": "battleship", "positions": [[5,2], [5,3], [5,4], [5,5]] },
  { "ship": "cruiser", "positions": [[8,1], [8,2], [8,3]] },
  { "ship": "submarine", "positions": [[3,0], [3,1], [3,2]] },
  { "ship": "destroyer", "positions": [[0,0], [1,0]] }])
  const [gameMap, setGameMap] = React.useState(Array(10).fill().map(()=>Array(10).fill()))
  const [score, setscore] = React.useState([])
  const handleClick = (posX,posY) => {
    const current = [...positions]
    const currentGameMap = [...gameMap]
    current.forEach(x=>{ x.positions.forEach(y=> { 
        if (y[0] === posX && y[1] === posY){
          currentGameMap[posX][posY] = 1
        }else{
          currentGameMap[posX][posY] = 0
        }
      })
    })
    setGameMap(currentGameMap)
  }
  return (
    <AppWrapper>
      <Header/>
      <PlaygoundWrapper>
        <div style={{display:'flex', justifyContent:'center'}}>
          <PlayerArea/>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <Grid>
            {gameMap.map((rows, index) => {
                return rows.map((cell,cellIndex) => {
                  return <Area onClick={()=> {handleClick(index,cellIndex)}} key={`${index-cellIndex}`} cell={cell}></Area>
                })
            })}
          </Grid>
        </div>
      </PlaygoundWrapper>
    </AppWrapper>
  );
}

export default App;
