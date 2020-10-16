
import React from 'react';


import styled from 'styled-components'

const Button = styled.button`   
background-color: #555555; 
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
    border-radius: 12px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    width: 100px;
    heidth:100px;

`


export default class Addcionar extends React.Component{

    handleClick(event){
        event.preventDefault();
        this.props.Alterar();
    }

    render(){
       return (
            <Button onClick = {this.handleClick.bind(this)}> Add</Button>
       );

    }



}


