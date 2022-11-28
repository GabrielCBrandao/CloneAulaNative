import { StatusBar } from "expo-status-bar";
import { Gradient } from "../../components/Gradient";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Feather } from '@expo/vector-icons';

import {Container,InputStyle,StButton,TextButton,TextImagem,} from "./styles";

export const EdicaoProduto = () => {
  return (
    <Container>
      <Gradient />
      <Header title="Editar Produto" />
      <InputStyle placeholder={"Produto 1"} placeholderTextColor={"#120a8f"} />
      <InputStyle placeholder={"25,00"} placeholderTextColor={"#120a8f"} />
      <InputStyle placeholder={"10"} placeholderTextColor={"#120a8f"} />
      <InputStyle
        placeholder={"Imagem1.png"}
        placeholderTextColor={"#120a8f"}
      />
      <TextImagem>Selecionar imagem <Feather name="upload" size={14} color="black" /></TextImagem>
      <StButton>
        <TextButton>ALTERAR</TextButton>
      </StButton>
      <Footer />
      <StatusBar style="auto" />
    </Container>
  );
};
