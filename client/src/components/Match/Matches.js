import React from 'react';
import axios from 'axios';
import Match from './Match';

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      currentMatchIndex: -1
    }
  }

  componentDidMount() {
    this.getMatches();
  }

  getMatches = () => {
    axios
      .get('/api/matches')
      .then(({ data }) => this.setState({ matches: data, currentMatchIndex: 0 }))
      .catch(err => console.error(err));
  }

  nextMatch = (index) => {
    this.setState({ currentMatchIndex: index + 1 });
  }

  renderView = () => {
    let { matches, currentMatchIndex } = this.state;

    if (currentMatchIndex >= 0 && currentMatchIndex < matches.length) {
      return <Match match={matches[currentMatchIndex]} />
    } else {
      return <div>Sorry, no matches right now</div>
    }
  }

  render() {
    return (
      this.renderView()
    )
  }
}

export default Matches;