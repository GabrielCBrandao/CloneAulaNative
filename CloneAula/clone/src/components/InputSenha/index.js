import { Container, ContainerInput, ViewIcon, ViewIconTwo } from "./styles";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const InputSenha = ({ placeholder }) => {
  const [eye, setEye] = useState(false);

  return (
    <Container>
      <ContainerInput placeholder={placeholder} />
      <TouchableOpacity onPress={() => setEye(!eye)}>
        {eye ? (
            <ViewIcon>
          <Ionicons
            name="eye-outline"
            size={16}
            color="#120a8f"
          /></ViewIcon>
        ) : (
            <ViewIconTwo><Ionicons
            name="eye-off-outline"
            size={16}
            color="#120a8f"
          /></ViewIconTwo>
        )}
      </TouchableOpacity>
    </Container>
  );
};
