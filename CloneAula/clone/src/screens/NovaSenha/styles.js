import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
      width: 130px;
      height: 130px;
      border-radius: 100.125px;
      margin-top: -200px
`;

export const TextButton = styled.Text`
      font-family: sans-serif;
      text-align: center;
      color: #120A8F;
      font-weight: bold;
      position: absolute
`;

export const StButton = styled.TouchableOpacity`
      height: 33px;
      width: 131px;
      border: 2px solid #00FFFF;
      border-radius: 5px;
      margin-top: 40px;
      margin-bottom: 5px;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
`;

export const Title = styled.Text`
      color: #120A8F;
      font-weight: bold;
      font-size: 15px;
      margin-top: 42px;
      margin-bottom: 20px;
`;

export const InputPassword = styled.TextInput`
      height: 31px;
      width: 188px;
      border: 2px solid #00FFFF;
      border-radius: 5px;
      padding-left: 5px;
      font-family: sans-serif;
      margin-top: 20px;
      margin-bottom: 5px;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;