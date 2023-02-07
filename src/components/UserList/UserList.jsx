import React from "react";
import axios from "axios";

export default class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }

  getPeople = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const people = res.data;
        this.setState({ people });
      });
  };

  componentDidMount() {
    this.getPeople();
  }

  render() {
    return (
      <ul>
        {this.state.people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
