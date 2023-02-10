import React from "react";
import { Link } from "react-router-dom";
import TecnicoNavbar from "../../TecnicoNavbar";

class TecnicosInfoPage extends React.Component {
  // É executado assim que o componente é inicializado, executado antes de tudo
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Esse método é executado sempre antes do metodo render()
  static getDerivedStateFromProps(props, state) {
    // Dessa forma tudo que tiver no state vai ser copiado e só o routes vai manter o valor passado
    // é uma medida para evitar que alguma funcionalidade altere as rotas
    return { ...state, routes: props.routes }
  }

  // Renderiza o componente no DOM (obrigatório)
  render() {
    return (
      <>
        <TecnicoNavbar routes={this.state.routes} isLoggedIn={true}></TecnicoNavbar>

        <h1>Técnicos</h1>
        <Link to={this.state.routes.home}>Retornar a página inicial</Link>
      </>
    );
  }

  // Esse método é executado sempre depois do metodo render()
  componentDidMount() {

  }
}

export default TecnicosInfoPage;