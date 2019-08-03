import React, {Component} from 'react';


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
    return (<h1>Noticias Api React</h1>);
  }
}
 
export default App;
