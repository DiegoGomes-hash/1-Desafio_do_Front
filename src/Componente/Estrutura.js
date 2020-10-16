import React from 'react';

import Informacoes from './Informacoes';

import styled from 'styled-components';
import Logoo from './logo.png';



const Wrapper = styled.section`      
        color: white;
        justify-content: center;        
        margin-top: 5%;
        display: flex;
        
        flex-direction: column;
        align-items: center;
`;


export default class Estrutura extends React.Component{


    constructor(){
        super();
        this.state = {
            contadorState: 0,
        };
    }


    AddElementor(){
        this.setState({  // Para modificar - é necessário acessar o método pelo set
            contadorState:this.state.contadorState + 1,
        });
    }

    render(){
        return (
            <Wrapper>
                    
                        <img src={Logoo} alt=""/>
                    
                    <div>
                    <Informacoes  Incrementar ={this.state.contadorState}  Alterar = {this.AddElementor.bind(this)}/>
                    </div>
            </Wrapper>

        )

    }

}