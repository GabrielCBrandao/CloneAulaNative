import { StatusBar } from "expo-status-bar";
import { Gradient } from "../../components/Gradient";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderCadastro } from "../../components/HeaderCadastro";
import {Container,InputNome,InputCPF,InputDate,StButton,TextButton,} from "./styles";
import { InputSenha } from "../../components/InputSenha";
export const Cadastro = () => {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const navigation = useNavigation();

  function screenConfirmacaoDeCadastro() {
    navigation.navigate("ConfirmacaoDeCadastro");
  }

  return (
    <Container>
      <Gradient />
      <HeaderCadastro title="Cadastro" />
      <InputNome
        value={user.nome}
        onChangeText={setUser}
        placeholder={"Nome"}
        placeholderTextColor={"gray"}
      />
      <InputCPF
        value={user.cpf}
        onChangeText={setUser}
        placeholder={"CPF"}
        placeholderTextColor={"gray"}
      />
      <InputDate
        value={user.date}
        onChangeText={setUser}
        placeholder={"Data de Nascimento"}
        placeholderTextColor={"gray"}
      />
      <InputSenha
        value={user.password}
        onChangeText={setUser}
        placeholder={"Senha"}
        placeholderTextColor={"gray"}
      />
      <br/>
      <InputSenha
        value={user.password}
        onChangeText={setUser}
        placeholder={"Confirmar Senha"}
        placeholderTextColor={"gray"}
      />
      <StButton onPress={screenConfirmacaoDeCadastro}>
        <TextButton>CADASTRAR</TextButton>
      </StButton>
      <StatusBar style="auto" />
    </Container>
  );
};
