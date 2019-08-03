import React, {Component, Fragment} from 'react';
import Header from './components/Header.js'
import ListaNoticias from './components/ListaNoticias.js'
import Formulario from './components/Formulario'

class App extends Component {
  state = {  
    noticias: []
  }
   componentDidMount(){
    this.consultarNoticias();

  }

  consultarNoticias = async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=14f9abb922fe4aa8be7be8e75467b9e4`
    
    const respuesta= await fetch(url);
    const noticias = await respuesta.json()
    this.setState({
      noticias: noticias.articles
    })
  }
  render() { 
    return (
      <Fragment>
        <Header
          titulo = 'Noticias API'
        />
        <div className="container white contenedor-noticias">
          <Formulario/>
          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}
 
export default App;
