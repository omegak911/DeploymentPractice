import React from 'react';

const Home = ({ changeView }) => {
  return (
    <div>
      <h3>Welcome to Unicorn</h3>

      <p>
        Unicorn is where we can truly be ourselves.  Like yourself, everyone here are in an open relationship.  So what are you waiting for?
      </p>

      <br/>

      <p>
        Click on matches to start your new side quest
      </p>

      <div>
        <button onClick={() => changeView('matches')}>Matches</button>
      </div>
    </div>
  )
}

export default Home;