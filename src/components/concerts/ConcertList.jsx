import React from 'react';
import { Link } from 'react-router';
import ConcertsRepository from 'data/ConcertsRepository.jsx';
import ConcertListItem from './ConcertListItem.jsx';

export default class ConcertList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { concerts: new ConcertsRepository().all() };
  }

  render() {
    return (
      <div>
        <h1>Concert list</h1>
        <Link to="/concerts/new">Add New Concert</Link>
        <ul>
          { this.state.concerts.map(concert =>
            <ConcertListItem key={concert.date} concert={concert} />
          )}
        </ul>
      </div>
    );
  }
}
