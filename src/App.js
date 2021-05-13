import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/"
import './assets/index.css';
import './assets/app.css';

class App extends Component {
  render(){
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
