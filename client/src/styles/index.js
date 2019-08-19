import styled from 'styled-components';

import {
  StyledWelcome
} from './HomeStyles';

import {
  StyledMatchesContainer,
  StyledCurrentMatch
} from './MatchesStyles';

const StyledApp = styled.div`
  background:
    radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%),
    radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%),
    radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%),
    radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%),
    radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%),
    radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,
    radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,
    radial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px,
    radial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px,
    radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%) 50px 50px;
  background-color:#b03;
  background-size:100px 100px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  StyledApp,
  StyledWelcome,
  StyledMatchesContainer,
  StyledCurrentMatch
}