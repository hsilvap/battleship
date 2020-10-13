import React from 'react'
import carrier from './../../assets/CarrierShape.png'
import barrleship from './../../assets/BattleshipShape.png'
import cruiser from './../../assets/CruiserShape.png'
import submarine from './../../assets/SubmarineShape.png'
import destroyer from './../../assets/AircraftShape.png'
import miss_small from './../../assets/Miss_small.png'
import hit_small from './../../assets/Hitsmall.png'
import styled from 'styled-components'


const ImageContainer = styled.img`
  width:200px;
`
const MissContainer = styled.img`
width:35px;
`
const ScoreDetail = ({shipType, size, hits, available}) => {
  let shipComponent = null
  switch(shipType){
    case 'carrier':
      shipComponent = <div> <ImageContainer src={carrier} alt="carrier" /> {available.map((h, index )=> <MissContainer  key={index} src={miss_small}  alt="miss" />)} {hits.map((h, index )=> <MissContainer  key={index} src={hit_small}  alt="miss" />)}</div>
      break
    
    case 'battleship':
      shipComponent = <div> <ImageContainer src={barrleship} alt="barrleship" /> {available.map((h, index )=> <MissContainer  key={index} src={miss_small}  alt="miss" />)} {hits.map((h, index )=> <MissContainer  key={index} src={hit_small}  alt="miss" />)}</div>
      break

    case 'cruiser':
      shipComponent = <div> <ImageContainer src={cruiser} alt="cruiser" /> {available.map((h, index )=> <MissContainer  key={index} src={miss_small}  alt="miss" />)} {hits.map((h, index )=> <MissContainer  key={index} src={hit_small}  alt="miss" />)}</div>
      break

    case 'submarine':
      shipComponent = <div> <ImageContainer src={submarine} alt="submarine" />  {available.map((h, index )=> <MissContainer  key={index} src={miss_small}  alt="miss" />)} {hits.map((h, index )=> <MissContainer  key={index} src={hit_small}  alt="miss" />)}</div>
      break

    case 'destroyer':
      shipComponent = <div> <ImageContainer src={destroyer} alt="destroyer" /> {available.map((h, index )=> <MissContainer  key={index} src={miss_small}  alt="miss" />)} {hits.map((h, index )=> <MissContainer  key={index} src={hit_small}  alt="miss" />)}</div>
      break

    default: 
      shipComponent = <span>Ship not found</span>
      break
  }
  return <div style={{marginTop: '2em'}}>
    {shipComponent}
  </div>
}
export default ScoreDetail