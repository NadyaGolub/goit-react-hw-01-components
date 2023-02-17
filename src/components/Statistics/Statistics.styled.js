import styled from "styled-components";

export const Section = styled.section`
background: #f5f4fa;
  width: 350px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 5px;
`;

export const List = styled.ul`
  display: flex;
  
  margin: 0;
  padding: 10px;
  width: 100%;
  justify-content: center;
  
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  gap: 10px;
  border: 1px solid rgb(0, 0, 0);
    width: 100%;
    border-radius: 5px;
   background-color: ${function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}};
`;

export const Title = styled.span`
  color: #212121;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.2;
`;

export const Value = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
`;