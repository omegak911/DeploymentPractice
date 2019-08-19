import styled from 'styled-components';

const StyledMatchesContainer = styled.div`
  height: 60vh;
  width: 50%;
  min-width: 400px;
`;

const StyledCurrentMatch = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export {
  StyledMatchesContainer,
  StyledCurrentMatch
}