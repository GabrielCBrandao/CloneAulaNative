import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #120a8f;
  font-weight: 800;
  font-size: 18px;
  align-self: flex-start;
  padding-left: 25px;
  margin-top: 30px;
`;

export const Descricao = styled.Text`
  font-size: 9px;
  color: #000000;
  font-weight: 800;
  padding: 30px;
  text-align: center;
`;

export const ViewCategory = styled.View`
  width: 100%;
  justify-content: space-around;
`;

export const ViewIcons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: end;
  padding-right: 30%;
  margin-top: 10px;
`;

export const CardCategory = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  padding-left: 35px;
  padding-right: 35px;
`;

export const SmallImage = styled.Image`
  width: 60px;
  height: 73px;
  background-color: grey;
  border-radius: 5px;
  margin: 15px 0;
`;

export const CenterImage = styled.Image`
  width: 156px;
  height: 101px;
  border-radius: 5px;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  margin: 2px;
  bottom: 0px;
`;

export const ContainerTitle = styled.View`
  width: 75%;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
`;

export const ViewTitleCard = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
`;

export const TitleCardCenter = styled.Text`
  font-size: 12px;
  color: ${colors.secondary};
  font-weight: 800;
  margin-top: -15px;
  margin-left: 100px;
  margin-right: 100px;
`;

export const TitleCardSmall = styled.Text`
  font-size: 10px;
  color: ${colors.secondary};
  font-weight: 800;
  margin-top: -30px;
`;

export const ViewCriadores = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between 25px;
`;

export const ViewTitleCriadores = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
`;

export const TitleCriadores = styled.Text`
  font-size: 10px;
  color: ${colors.secondary};
  font-weight: 800;
  margin-right: 27px;
  margin-left: 27px;
  margin-top: -10px;
`;

export const CriadoresImage = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: 2px solid #120a8f;
  margin-left: 10px;
  margin-right: 10px;
`;
