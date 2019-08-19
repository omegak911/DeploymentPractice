import React from 'react';

const Match = ({ match }) => {
  const pictures = match.pictures.map((url, i) =>
    <img key={i} src={url} alt=""/>
  )

  return (
    <div>
      <div>
        pictures go here
        {pictures}
      </div>
      <div>
        <p>
          {match.bio}
        </p>
      </div>
      bio
    </div>
  )
}

export default Match;