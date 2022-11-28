import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Cadastro } from "../screens/Cadastro";
import { CadastroCategoria } from "../screens/CadastroCategoria";
import { CadastroProduto } from "../screens/CadastroProduto";
import { Carrinho } from "../screens/Carrinho";
import { Favoritos } from "../screens/Favoritos";
import { Produtos } from "../screens/Produtos";
import { EdicaoSenha,  } from "../screens/EdicaoSenha";
import { ConfirmacaoDeCompra } from "../screens/ConfirmacaoDeCompra";
import { ConfirmacaoDeCadastro } from "../screens/ConfirmacaoDeCadastro";
import { CriarNovaSenha } from "../screens/NovaSenha";
import { EdicaoProduto } from "../screens/EdicaoProduto";
import { EdicaoCategoria } from "../screens/EdicaoCategoria";
import { Home } from "../screens/Home";
import { EsqueciMinhaSenha } from "../screens/EsqueciMinhaSenha";


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Login" component={Login} />
      <Screen name="EdicaoCategoria" component={EdicaoCategoria} />
      <Screen name="EdicaoProduto" component={EdicaoProduto} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="CadastroCategoria" component={CadastroCategoria} />
      <Screen name="CadastroProduto" component={CadastroProduto} />
      <Screen name="Carrinho" component={Carrinho} />
      <Screen name="EdicaoSenha"component={EdicaoSenha}/>
      <Screen name="ConfirmacaoDeCadastro" component={ConfirmacaoDeCadastro} />
      <Screen name="ConfirmacaoDeCompra" component={ConfirmacaoDeCompra} />
      <Screen name="Favoritos" component={Favoritos} />
      <Screen name="Home" component={Home} />
      <Screen name="Produtos" component={Produtos} />
      <Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} />
      <Screen name="NovaSenha" component={CriarNovaSenha} />
    </Navigator>
  );
}
