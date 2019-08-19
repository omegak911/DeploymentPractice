import React from 'react';

import styled from 'styled-components';

const Match = ({ match, currentMatchIndex, nextMatch }) => {
  const pictures = 
    <StyledCarousel>
      {match.pictures.map((url, i) =>
      <div key={i} style={{ height: '300px', width: '200px'}}>
        <StyledPic  src={url} alt=""/>
      </div>)}
    </StyledCarousel>

  return (
    <div>
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
      <button onClick={() => nextMatch(currentMatchIndex)}>Next</button>
    </div>
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