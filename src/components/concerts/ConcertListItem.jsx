import React from 'react';
import { Link } from 'react-router';

export default class ConcertListItem extends React.Component {
  linkTo(concert) {
    return `/concerts/${concert.id}`;
  }

  render() {
    const concert = this.props.concert;
    return (
      <li>
        <Link to={this.linkTo(concert)}>
          date: {concert.date}, pl: {concert.textPL}, en: {concert.textEN}
        </Link>
      </li>
    );
  }
}