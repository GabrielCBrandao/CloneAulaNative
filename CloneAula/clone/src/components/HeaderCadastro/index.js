import logo from "../../../assets/logo.png";
import colors from "../../themes/colors.js";
import { AntDesign } from "@expo/vector-icons";
import { Container, Title, Logo } from "./styles.js";

export const HeaderCadastro = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Logo source={logo} />
    </Container>
  );
};
