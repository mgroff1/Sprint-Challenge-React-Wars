import React from 'react'
import './StarWars.css'
import { Cards, CardText,
	CardTitle,CardContainer,DataContainer} from './Style.js';
export default function SWCard(props) {

  return (


	<CardContainer>
	  <Cards>
<DataContainer>
		<CardTitle className="Header">Name: {props.name}</CardTitle>
    	</DataContainer>
    	<DataContainer>
		<CardText>DOB: {props.DOB}</CardText>
    <CardText>Height: {props.height}</CardText>
    <CardText>Weight: {props.weight}</CardText>
    	</DataContainer>

	  </Cards>
	</CardContainer>

  )
}
