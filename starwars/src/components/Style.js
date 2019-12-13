// import React from 'react';
import styled from 'styled-components';


export const CardContainer = styled.div`
        background:rgba(0,0,0,.8);
        display:flex;
        width:60vw;
        flex-direction:column;
        box-shadow: 0px 1px 18px 3px rgba(0,0,0,0.77);
        align-items:flex-start;
        border-radius:8px;
        align-self:center;
        justify-self:space-around;
        margin-left:15vw;
        border:5px inset yellow;
        transistion:all .65s ease-in-out;
        transform:scale(1);
        &:hover{
          transistion:all .65s ease-in-out;
          transform:scale(1.1);
        }
`;


export const DataContainer = styled.div`

      display:flex;
      width:100%;
      flex-direction:column;
      align-items:flex-start;
        border-radius:8px;
`;

export const Cards = styled.div`
      /* background:rgba(125,125,55,.85); */
        display:flex;
        width:70vw;
        border-radius:8px;

`;

export const CardTitle = styled.h1`
    font-size:2.25rem;
    width:30vw;
    color:yellow;

    border-radius:8px;
    padding:5px;
    text-align:left;
      text-shadow: 0px 1px 10px rgba(150,150,150,0.77);

`;

export const CardText = styled.h2`
    font-size:1.5rem;
    width:20vw;
    margin:0;
    padding:2px;
    border-radius:8px;
    padding:3px;
    align-items:flex-start;
    text-align:left;
    color:yellow;
      text-shadow: 0px 1px 10px rgba(150,150,150,0.77);

`;

// export const CardFooter = styled.p`
//
// `;
