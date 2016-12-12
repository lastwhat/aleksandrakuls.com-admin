import React from 'react';
import { Link } from 'react-router';
import serialize from 'form-serialize';
import ConcertsRepository from 'store/repositories/ConcertsRepository.js';

export default class ConcertEditPage extends React.Component {
  constructor(props) {
    super(props);
    const repo = new ConcertsRepository();
    this.state = { concert: repo.empty() };

    const id = this.props.params.concertId;
    repo.find(id).then((concert) => {
      this.setState({
        concert: concert
      });
    });
  }

  submit(e) {
    e.preventDefault();
    const { id, date, textPL, textEN } = serialize(this.form, { hash: true });
    const concert = { id, date, textPL, textEN };

    // TODO: do something
  }

  render() {
    const concert = this.state.concert;
    return (
      <div>
        <h1>Edit concert</h1>
        <form onSubmit={(e) => { this.submit(e); }} ref={(c) => { this.form = c; }} >
          date:
          <input
            type="text"
            name="date"
            value={concert.date}
            onChange={() => {}}
            placeholder="date"
          />

          <br />

          textPL:
          <textarea
            name="textPL"
            value={concert.textPL}
            onChange={() => {}}
            placeholder="textPL"
          />

          <br />

          textEn:
          <textarea
            name="textEN"
            value={concert.textEN}
            onChange={() => {}}
            placeholder="textEN"
          />

          <br />

          <input type="hidden" name="id" value={concert.id} />
          <input type="submit" value="Edit" />
        </form>
        <Link to="/concerts/">Back</Link>
      </div>
    );
  }
}
