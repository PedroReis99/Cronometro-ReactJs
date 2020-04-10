import React, { Component } from 'react';

class Timer extends Component {

    constructor(props){
        super(props);
        this.state = {
          timer: 0,
          Botao: "Iniciar"
        };
        this.Tempo = null;
        this.Iniciar = this.Iniciar.bind(this);
        this.Parar = this.Parar.bind(this);
      }
    
      Iniciar(){
        let state = this.state;
    
        if(this.Tempo !== null){
          clearInterval(this.Tempo);
          this.Tempo = null;
          state.Botao = "Iniciar";
        }else{
          this.Tempo = setInterval(() => {
            let state = this.state;
            state.timer += 0.001;
            this.setState(state);
          }, 1);
          state.Botao = "Pausar";
        }
        this.setState(state);
      }
    
      Parar(){
        if(this.Tempo !== null){
          clearInterval(this.Tempo);
          this.Tempo = null;
        }
        let state = this.state;
        state.timer = 0;
        state.Botao = "Iniciar";
        this.setState(state);
      }
    

    render(){
        return(
            <div className="container">
                <img src={require('../../assets/cronometro.png')} className="img" />
                <a className="timer">{this.state.timer.toFixed(3)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.Iniciar}>{this.state.Botao}</a>
                    <a className="botao" onClicl={this.Parar}>Zerar</a>
                </div>
            </div>
        );
    }
}

export default Timer;