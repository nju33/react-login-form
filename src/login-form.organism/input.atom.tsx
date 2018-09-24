import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px 10px;
  border-radius: 2px;
  outline: none;
  border: 1px solid #222;
  background: #fff;
  transition: .2s;

  &:focus {
    background: #fff;
  }

  &[aria-invalid=true] {
    background: #c87a90;
  }
`;