import React from 'react';

import styled from 'styled-components';
import {
  StyledCurrentMatch
} from '../../styles/MatchesStyles';

const Match = ({ match, currentMatchIndex, nextMatch }) => {
  const pictures = 
    <StyledCarousel>
      {match.pictures.map((url, i) =>
      <div key={i} style={{ height: '300px', width: '200px'}}>
        <StyledPic  src={url} alt=""/>
      </div>)}
    </StyledCarousel>

  const handleDecision = (e) => {
    e.preventDefault();
    nextMatch(currentMatchIndex, e.target.value);
  }

  return (
    <StyledCurrentMatch>
      <div>
        pictures go here
        {pictures}
      </div>
      <div>
        Bio:
        <p>
          {match.bio}
        </p>
      </div>
      <div>
        <button type="submit" value="dislike" onClick={handleDecision}>Dislike</button>
        <button type="submit" value="like" onClick={handleDecision}>Like</button>
      </div>
    </StyledCurrentMatch>
  )
}

const StyledCarousel = styled.div`
  display: flex;
  height: 320px;
  width: 200px;
  overflow: scroll;
  scroll-direction: horizontal;
`;


const StyledPic = styled.img`
  height: 300px;
  width: 200px;
`;

export default Match;