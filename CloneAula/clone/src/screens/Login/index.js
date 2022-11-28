import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {Container,Logo,TextButton,StButton,Title,InputLogin,Recover,} from "./styles";
import { InputSenha } from "../../components/InputSenha";

export const Login = () => {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const navigation = useNavigation();

  function screenRecuperacaoSenha() {
    navigation.navigate("RecuperacaoSenha");
  }

  function screenCadastro() {
    navigation.navigate("Cadastro");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo} />
      <Title>Login</Title>
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={"Digite seu login"}
        placeholderTextColor={"gray"}
      />
      <br/>
      <InputSenha
        value={user.password}
        onChangeText={setUser}
        placeholder={"Digite sua senha"}
        placeholderTextColor={"gray"}
      />
      <TouchableOpacity onPress={screenRecuperacaoSenha}>
        <Recover>Esqueceu a senha? Clique aqui!</Recover>
      </TouchableOpacity>
      <StButton>
        <TextButton>ENTRAR</TextButton>
      </StButton>
      <TouchableOpacity onPress={screenCadastro}>
        <Recover>Não possui cadastro? Cadastre-se!</Recover>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
};
