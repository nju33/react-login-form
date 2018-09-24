import styled from 'styled-components';

export const ErrorMessage = styled.p`
  font-size: .9em;
  margin: 0;
  color: #cb1b45;
  height: 0;
  overflow: hidden;
  transition: .2s;
  opacity: 0;

  &[aria-invalid=true] {
    margin-left: 10px;
    height: calc(1em + 2px);
    opacity: 1;
  }
`;