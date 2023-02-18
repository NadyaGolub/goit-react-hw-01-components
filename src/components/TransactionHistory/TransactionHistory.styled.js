import styled from 'styled-components';

export const Container = styled.table`
  background: #ffff;
  width: 90%;
  margin: 50px auto;
  border: 1px solid #1e90ff;
  text-align: center;
  table-layout: fixed;

  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 5px;
`;

export const Title = styled.tr`
  border: 1px solid #1e90ff;
  border-spacing: 3px;
  &:nth-child(even) {
    background: #00ffff;
  }
`;

export const Name = styled.th`
  text-align: center;
  padding: 10px;
  background: #00bfff;
  border: 1px solid #0000cd;
  border-radius: 5px;
`;

export const Value = styled.td`
  border: 1px solid #87CEEB;
`;
