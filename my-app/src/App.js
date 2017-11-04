import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resultado from './resultado';
import Codigo from './codigo';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        codigous:'',
        codigos: [
  {codigo: 1, nombre: 'Pedro Perez'},
  {codigo: 2, nombre: 'Juan Rodriguez'},
  {codigo: 3, nombre: 'Alexander Perez'},
  {codigo: 4, nombre: 'Sebastian Lima'},
  {codigo: 5, nombre: 'Hola Holitas'},
  {codigo: 6, nombre: 'Juanita Perez'},
  {codigo: 7, nombre: 'Fulanito Detal'},
  {codigo: 8, nombre: 'Tal Cual'},
  {codigo: 9, nombre: 'Caifi Sello'},
  {codigo: 10, nombre: 'Maximiliano Marin'},
  {codigo: 11, nombre: 'Quien Donde'},
  {codigo: 12, nombre: 'Alonso Jimenez'},
  {codigo: 13, nombre: 'Claudia Bustamante'},
],

filtro:[],

      }

      this.buscarcodigo = this.buscarcodigo.bind(this);
  }

buscarcodigo(codigous){
  this.setState({codigous:codigous.target.value})
var filtrar=this.state.codigos.filter((entry)=> {
 if (parseInt(codigous.target.value)=== entry.codigo) {
return true

 }else{
  return false
 }

});
  console.log(filtrar);
  this.setState({filtro:filtrar});

}

 


  render() {
    let show = null;
    if (this.state.filtro.length !== 0) {
      show = `Codigo ${this.state.codigous} es de  :` + this.state.filtro[0].nombre
      }else {
        show = `Codigo ${this.state.codigous} no tiene asociado`

      }

    


    return (
      <div className="App">}}

        <p>Que buscas ?</p>
        <input type="text"
          onChange={this.buscarcodigo.bind(this)}
          placeholder="text">
        </input>
        <p> {show} </p>
        
      </div>
    );
  }
}

export default App;
