import styled from 'styled-components';

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: .5em;
  }

  & + &:last-child {
    margin-top: 1em;
  }
`;