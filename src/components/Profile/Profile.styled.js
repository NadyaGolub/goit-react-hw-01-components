import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f4fa;
  width: 250px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 5px;
`;

export const Box = styled.ul`
  text-align: center;
  font-size: 16px;
  line-height: 1.2;
  


`;

export const Name = styled.p`
  font-weight: 700;
  
`;

export const Img = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 10px;
  width: 100%;
  justify-content: center;
  background: #c0c0c0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  gap: 10px;
`;

export const Title = styled.span`
  color: #212121;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.2;
`;

export const Value = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
`;
