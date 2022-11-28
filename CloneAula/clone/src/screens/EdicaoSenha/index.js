import {StatusBar} from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {Gradient} from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import { Container, Logo, Title, StButton, TextButton } from "./styles";

export const EdicaoSenha = () => {
  const navigation = useNavigation();

  function screenLogin() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo} />
      <Title >Senha alterada com sucesso!</Title>
      <StButton onPress={screenLogin}>
      <TextButton>LOGIN</TextButton>
      </StButton>
      <StatusBar style="auto" />
    </Container>
  );
}