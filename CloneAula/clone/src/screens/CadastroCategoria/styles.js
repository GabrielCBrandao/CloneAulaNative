import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: sans-serif;
  text-align: center;
  color: #120a8f;
  font-weight: bold;
  position: absolute;
`;

export const StButton = styled.TouchableOpacity`
  height: 33px;
  width: 131px;
  border: 2px solid #00ffff;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const InputNome = styled.TextInput`
  height: 31px;
  width: 188px;
  border: 2px solid #00ffff;
  border-radius: 5px;
  padding-left: 5px;
  font-family: sans-serif;
  margin-top: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const InputImagem = styled.TextInput`
  height: 31px;
  width: 188px;
  border: 2px solid #00ffff;
  border-radius: 5px;
  padding-left: 5px;
  font-family: sans-serif;
  margin-top: 20px;
  margin-bottom: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TextImagem = styled.Text`
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: #120a8f;
  margin-top: 42px;
`;
