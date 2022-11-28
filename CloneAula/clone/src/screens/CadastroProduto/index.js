import { StatusBar } from "expo-status-bar";
import { Gradient } from "../../components/Gradient";
import {Container,InputStyle,StButton,TextButton,TextImagem,} from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Feather } from '@expo/vector-icons';

export const CadastroProduto = () => {
  return (
    <Container>
      <Gradient />
      <Header title="Cadastro de Produto" />
      <InputStyle placeholder={"Nome"} placeholderTextColor={"gray"} />
      <InputStyle placeholder={"Preço R$"} placeholderTextColor={"gray"} />
      <InputStyle
        placeholder={"Quantidade em estoque"}
        placeholderTextColor={"gray"}
      />
      <InputStyle placeholder={"Imagem"} placeholderTextColor={"gray"} />

      <TextImagem>Selecionar imagem <Feather name="upload" size={14} color="black" /></TextImagem>
      <StButton>
        <TextButton>CADASTRAR</TextButton>
      </StButton>
      <Footer />

      <StatusBar style="auto" />
    </Container>
  );
};
