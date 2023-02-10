import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home"
import ClientesPage from "./pages/Cliente/Clientes"
import ClientesCadastroPage from "./pages/Cliente/ClientesCadastro";
import ClientesInfoPage from "./pages/Cliente/ClientesInfo";
import OrdensServicosPage from "./pages/Servicos e Produtos/OrdensServicos";
import ProdutosCadastroPage from "./pages/Servicos e Produtos/ProdutosCadastro";
import ServicosCadastroPage from "./pages/Servicos e Produtos/ServicosCadastro";
import ProdutosServicosPage from "./pages/Servicos e Produtos/ProdutosServicos";
import TecnicosPage from "./pages/Tecnico/Tecnicos";
import TecnicosCadastroPage from "./pages/Tecnico/TecnicosCadastro";
import TecnicosInfoPage from "./pages/Tecnico/TecnicosInfo";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: "/",
      cliente: "/clientes",
      tecnico: "/tecnicos",
      cadastrocliente: "/clientes/cadastro",
      cadastrotecnico: "/tecnicos/cadastro",
      informacoescliente: "/clientes/info",
      informacoestecnico: "/tecnicos/info",
      produtoseservicos: "/cliente/produtos-e-servicos",
      cadastroproduto: "/tecnicos/produtos/cadastro",
      cadastroservico: "/tecnicos/servico/cadastro",
      ordemservico: "/tecnico/ordens-de-servico",
      id_cliente: null,
      id_tecnico: null
    }
  }

  render() {
    let routes = this.state;
    return (
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home routes={routes} />} />
          <Route path={routes.cliente} element={<ClientesPage routes={routes} setIdCliente={this.setIdCliente} />} />
          <Route path={routes.tecnico} element={<TecnicosPage routes={routes} setIdTecnico={this.setIdTecnico} />} />
          <Route path={routes.cadastrocliente} element={<ClientesCadastroPage routes={routes} />} />
          <Route path={routes.cadastrotecnico} element={<TecnicosCadastroPage routes={routes} />} />
          <Route path={routes.informacoescliente} element={<ClientesInfoPage routes={routes} id_cliente={this.id_cliente} />} />
          <Route path={routes.informacoestecnico} element={<TecnicosInfoPage routes={routes} id_tecnico={this.id_tecnico} />} />
          <Route path={routes.produtoseservicos} element={<ProdutosServicosPage routes={routes} id_cliente={this.id_cliente} />} />
          <Route path={routes.cadastroproduto} element={<ProdutosCadastroPage routes={routes} />} id_tecnico={this.id_tecnico} />
          <Route path={routes.cadastroservico} element={<ServicosCadastroPage routes={routes} />} id_tecnico={this.id_tecnico} />
          <Route path={routes.ordemservico} element={<OrdensServicosPage routes={routes} id_tecnico={this.id_tecnico} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;