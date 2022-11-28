import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.View`
  box-sizing: border-box;
  position: absolute;
  width: 308px;
  height: 190px;
  /* background: #FFFFFF; */
  border: 2px solid #00ffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const ViewText = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextCart = styled.Text`
  font-size: 10px;
  color: ${colors.secondary};
  font-weight: 800;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ContainerButton = styled.View`
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  align-self: center;
  margin-top: 40px;
`;

export const StButton = styled.TouchableOpacity`
  box-sizing: border-box;
  width: 90px;
  height: 33px;
  border: 2px solid #00ffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background: #fff;
  align-self: center;
  margin-top: 20px;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: sans-serif;
  text-align: center;
  color: #120a8f;
  align-self: center;
  font-size: 11px;
  font-weight: bold;
  line-height: 11px;
  padding-top: 2px;
`;