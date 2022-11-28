import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Gradient } from "../../components/Gradient";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Entypo, SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import {CardCategory,CenterImage,Container,SmallImage,Title,TitleCardCenter,TitleCardSmall,TitleCriadores,ViewCategory,ViewCriadores,ViewIcons,ViewTitleCard,ViewTitleCriadores,CriadoresImage,Descricao} from "./styles";
import um from "../../../assets/1.jpg";
import cinco from "../../../assets/5.jpg";
import tres from "../../../assets/3.jpg";
import alex from "../../../assets/alex.png";
import beatriz from "../../../assets/beatriz.png";
import carlos from "../../../assets/carlos.png";
import alie from "../../../assets/alie.png";


export const Home = () => {
  const navigation = useNavigation();

  const screenCadastroCategoria = () => {
    navigation.navigate("CadastroCategoria");
  };
  const screenProdutos = () => {
    navigation.navigate("Produtos");
  };
  const screenEdicaoCategoria = () => {
    navigation.navigate("EdicaoCategoria");
  };

  return (
    <Container>
      <Gradient />
      <Header title="Marketplace" />
      <Title>Sobre nós...</Title>
      <Descricao>
        "Somos a turma 7 da residência de TIC/software do serratec 2022.2.
        Uma turma muito unida que mesmo com todos os problemas conseguiu ir até o fim e criar projetos incríveis !!"
      </Descricao>
      <ViewCategory>
        <Title>
          Categorias{" "}
          <TouchableOpacity onPress={screenCadastroCategoria}>
            <Entypo name="plus" size={19} color="#120a8f" />
          </TouchableOpacity>
        </Title>
        <ViewIcons>
          <TouchableOpacity>
            <SimpleLineIcons name="trash" size={17} color="#ff0000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={screenEdicaoCategoria}>
            <AntDesign name="edit" size={19} color="#00ff" />
          </TouchableOpacity>
        </ViewIcons>
      </ViewCategory>
      <CardCategory>
        <SmallImage source={tres} />
        <TouchableOpacity onPress={screenProdutos}>
          <CenterImage source={cinco} />
        </TouchableOpacity>
        <SmallImage source={um} />
      </CardCategory>
      <ViewTitleCard>
        <TitleCardSmall>Tec3</TitleCardSmall>
        <TitleCardCenter>Tec1</TitleCardCenter>
        <TitleCardSmall>Tec2</TitleCardSmall>
      </ViewTitleCard>
      <Title>Criadores</Title>
      <ViewCriadores>
         
          <CriadoresImage source={alex} />
          <CriadoresImage source={beatriz} />
          <CriadoresImage source={carlos} />
          <CriadoresImage source={alie} />
          </ViewCriadores>
        <ViewTitleCriadores>

          <TitleCriadores>Alex</TitleCriadores>
          <TitleCriadores>Beatriz</TitleCriadores>
          <TitleCriadores>Carlos</TitleCriadores>
          <TitleCriadores>Alie</TitleCriadores>
        </ViewTitleCriadores>



      

      <Footer />
      <StatusBar style="auto" />
      <Gradient position="bottom" />
    </Container>
  );
};
