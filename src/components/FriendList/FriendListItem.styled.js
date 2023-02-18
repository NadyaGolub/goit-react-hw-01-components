import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 10px;
  padding: 10px;
  align-items: center;
   border: 1px solid rgb(0 0 0 / 12%);
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.activity ? 'green' : 'red';
  }};
  
`;
