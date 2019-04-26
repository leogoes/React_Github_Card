import React from "react";
import ReactDOM from "react-dom";

const testData = [
  {
    name: "ShibuGod",
    avatar_url: "https://avatars1.githubusercontent.com/u/46874141?v=4",
    company: "Putapp"
  },
  {
    name: "Felipe Goes",
    avatar_url: "https://avatars1.githubusercontent.com/u/42613427?v=4",
    company: "INSS Proxy Killer"
  },
  {
    name: "Fabio",
    avatar_url: "https://avatars1.githubusercontent.com/u/31147881?v=4",
    company: "Monolitico"
  },
  {
    name: "Leo",
    avatar_url: "https://avatars0.githubusercontent.com/u/42616531?v=4",
    company: "Pitch Killer"
  }
];

const CardList = props => (
  <div>
    {props.profile.map(profile => (
      <Card {...profile} />
    ))}
  </div>
);

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Github Username" />
        <button>Add Card</button>
      </form>
    );
  }
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: testData
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <br />
        <Form />
        <CardList profile={testData} />
      </div>
    );
  }
}

ReactDOM.render(<App title="The GitHub Cards App" />, root);
