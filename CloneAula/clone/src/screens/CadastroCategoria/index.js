import { StatusBar } from "expo-status-bar";
import { Gradient } from "../../components/Gradient";
import { Container, InputImagem, InputNome, StButton, TextButton, TextImagem } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { Feather } from '@expo/vector-icons';

export const CadastroCategoria = () => {
  const [categoria, setCategoria] = useState({
    nome: "",
    imagem: "",
  });

  return (
    <Container>
      <Gradient />
      <Header title="Cadastro de Categoria" />
      <InputNome
        value={categoria.nome}
        onChangeText={setCategoria}
        placeholder={"Nome"}
        placeholderTextColor={"gray"}
      />
      <InputImagem
        value={categoria.imagem}
        onChangeText={setCategoria}
        placeholder={"Imagem"}
        placeholderTextColor={"gray"}
      />

      <TextImagem>Selecionar imagem <Feather name="upload" size={14} color="black" /></TextImagem>
      <StButton>
        <TextButton>CADASTRAR</TextButton>
      </StButton>
      <Footer />
      <StatusBar style="auto" />
    </Container>
  );
};
