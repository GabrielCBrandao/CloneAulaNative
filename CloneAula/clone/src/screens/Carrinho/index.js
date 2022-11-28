import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Gradient } from "../../components/Gradient";
import {
  CardContainer,
  Container,
  ContainerButton,
  StButton,
  TextButton,
  TextCart,
  ViewText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

export const Carrinho = () => {
  const navigation = useNavigation();

  const screenProdutos = () => {
    navigation.navigate("Produtos");
  };
  const screenConfirmacaoDeCompra = () => {
    navigation.navigate("ConfirmacaoDeCompra");
  };

  return (
    <Container>
      <Gradient />
      <Header title="Carrinho" />
      <CardContainer>
        <ViewText>
          <TextCart>Produto</TextCart>
          <TextCart>Quantidade</TextCart>
          <TextCart>Preço Unitário</TextCart>
          <TextCart>Total</TextCart>
        </ViewText>
        <ViewText>
          <TextCart>Produto 1</TextCart>
          <TextCart><Feather name="minus-circle" size={12} color="#120a8f" /> 2 <Feather name="plus-circle" size={12} color="#120a8f" /></TextCart>
          <TextCart>R$ 25,00</TextCart>
          <TextCart>R$ 50,00</TextCart>
        </ViewText>
        <ViewText>
          <TextCart>Produto 4</TextCart>
          <TextCart><Feather name="minus-circle" size={12} color="#120a8f" /> 1 <Feather name="plus-circle" size={12} color="#120a8f" /></TextCart>
          <TextCart>R$ 100,00</TextCart>
          <TextCart>R$ 100,00</TextCart>
        </ViewText>
        <ViewText>
          <TextCart>Produto 5</TextCart>
          <TextCart><Feather name="minus-circle" size={12} color="#120a8f" /> 1 <Feather name="plus-circle" size={12} color="#120a8f" /></TextCart>
          <TextCart>R$ 40,00</TextCart>
          <TextCart>R$ 40,00</TextCart>
        </ViewText>
        <br/>
        <br/>
        <ViewText>
          <TextCart>Total da compra</TextCart>
          <TextCart>R$ 190,00</TextCart>
        </ViewText>
        <ViewText>
          <TextCart>Data da compra</TextCart>
          <TextCart>17/06/2022</TextCart>
        </ViewText>
        <ContainerButton>
          <StButton onPress={screenProdutos}>
            <TextButton>ADICIONAR MAIS ITENS</TextButton>
          </StButton>
          <StButton onPress={screenConfirmacaoDeCompra}>
            <TextButton>FECHAR PEDIDO</TextButton>
          </StButton>
        </ContainerButton>
      </CardContainer>
      <StatusBar style="auto" />
      <Footer />
    </Container>
  );
};
