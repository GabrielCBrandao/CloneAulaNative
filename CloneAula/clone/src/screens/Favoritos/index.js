import { StatusBar } from "expo-status-bar";
import { Gradient } from "../../components/Gradient";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AntDesign } from "@expo/vector-icons";
import dois from "../../../assets/2.png";
import cinco from "../../../assets/5.jpg";
import seis from "../../../assets/6.jpg";
import {
  Card,
  Container,
  ContainerIcon,
  ImagemCard,
  Title,
  ViewCard,
  ViewFavorito,
} from "./styles";

export const Favoritos = () => {
  return (
    <Container>
      <Gradient />
      <Header title="Favoritos" />

      <ViewCard>
        <Card>
          <ImagemCard source={dois} />
          <ViewFavorito>
            <Title>Produto 2</Title>
            <Title>Preco R$ 50,00</Title>
            <Title>1 unidade em estoque</Title>
          </ViewFavorito>
          <ContainerIcon>
            <AntDesign name="close" size={24} color="#120a8f" />
          </ContainerIcon>
        </Card>
      </ViewCard>
      <ViewCard>
        <Card>
          <ImagemCard source={cinco} />
          <ViewFavorito>
            <Title>Produto 5</Title>
            <Title>Preco R$ 40,00</Title>
            <Title>20 unidades em estoque</Title>
          </ViewFavorito>
          <ContainerIcon>
            <AntDesign name="close" size={24} color="#120a8f" />
          </ContainerIcon>
        </Card>
      </ViewCard>
      <ViewCard>
        <Card>
          <ImagemCard source={seis} />
          <ViewFavorito>
            <Title>Produto 6</Title>
            <Title>Preco R$ 70,00</Title>
            <Title>8 unidades em estoque</Title>
          </ViewFavorito>
          <ContainerIcon>
            <AntDesign name="close" size={24} color="#120a8f" />
          </ContainerIcon>
        </Card>
      </ViewCard>

      <Footer />
      <StatusBar style="auto" />
    </Container>
  );
};
