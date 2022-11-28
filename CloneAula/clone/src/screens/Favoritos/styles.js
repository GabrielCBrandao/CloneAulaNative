import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const ViewCard = styled.View`
  align-items: center;
  width: 85%;
  margin: 15px;
`;

export const Card = styled.View`
  width: 100%;
  height: 80px;
  margin: 5px 0;
  border: 2px solid #00ffff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: row;
`;

export const ImagemCard = styled.Image`
  width: 120px;
  height: 85%;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ViewFavorito = styled.View`
  flex: 1;
  margin: 5px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${colors.secondary};
  font-weight: 600;
`;

export const ContainerIcon = styled.View`
  align-items: flex-end;
  padding-right: 5px;
`;
