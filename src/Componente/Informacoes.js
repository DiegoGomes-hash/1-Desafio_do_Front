import React from 'react';

import Addcionar from './Addcionar';

import {Title} from './styled'





// H1 -> Foi trocado por title para estilização linha 15
export default class Informacoes extends React.Component{

    render(){
        return (
            <div>
            
                <Title> {this.props.Incrementar} </Title>  
                <Addcionar  Alterar = {this.props.Alterar}> </Addcionar>
            </div>
        )

    }



}