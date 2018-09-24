import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  padding: 5px 10px;
  background: #fff;
  width: 7em;
  margin-left: auto;
  cursor: pointer;
  border-radius: 2px;
  transition: .2s;

  &[disabled] {
    cursor: default;
    background: #656765;
  }
`;
