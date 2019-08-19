import React from 'react';

import Home from './Home';
import Matches from './Match/Matches';

import {
  StyledApp
} from '../styles/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
  }

  changeView = (view) => {
    this.setState({ view });
  }

  renderView = () => {
    let { view } = this.state;

    if (view === 'home') {
      return <Home changeView={this.changeView} />
    } else if (view === 'matches') {
      return <Matches />
    }
  }

  render() {
    return (
      <StyledApp>
        {this.renderView()}
      </StyledApp>
    )
  }
}

export default App;