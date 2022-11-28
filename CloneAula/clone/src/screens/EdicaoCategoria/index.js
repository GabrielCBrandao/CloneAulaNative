import { StatusBar } from "expo-status-bar";
import { Gradient } from "../../components/Gradient";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, InputStyle, StButton, TextButton, TextImagem } from "./styles";
import { Feather } from '@expo/vector-icons';



export const EdicaoCategoria = () => {
  return (
    <Container>
      <Gradient />
      <Header title="Editar Categoria" />
      <InputStyle placeholder={"Tec1"} placeholderTextColor={"#120a8f"} />
      <InputStyle placeholder={"imagem5.png"} placeholderTextColor={"#120a8f"} />
      <TextImagem>Selecionar imagem <Feather name="upload" size={14} color="black" /></TextImagem>
      <StButton>
        <TextButton>ALTERAR</TextButton>
      </StButton>
      <Footer />
      <StatusBar style="auto" />
    </Container>
  );
};