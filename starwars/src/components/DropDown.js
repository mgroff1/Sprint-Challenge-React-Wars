import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import SWCard from './Card';
import { Cards, CardText,
	CardTitle,CardContainer,DataContainer} from './Style.js';


export const DropDown = (props)=> {
  const options = [
    <SWCard name= {props.name} DOB={props.DOB} height={props.height} weight={props.weight} veh={props.veh}/>
  ];


    return (

<section>

             <Dropdown options={[...options]} onChange={props._onSelect} value={props.name} placeholder="Character DropDown"/>
             <CardContainer>
<Cards>
             <div className='result'></div>
             </Cards>
             value={props.name} placeholder="Character DropDown"/>
             </CardContainer>
</section>



    )

  }
