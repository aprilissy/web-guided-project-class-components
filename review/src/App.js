import React from "react";

const Person = (props) => {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <p>
        {props.name} is a great name! Never change {props.name}.
      </p>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren"
    }
  }

  handleNameChange = () => {
    this.setState({
      name:"Allison"
    })
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <Person name={this.state.name}/>
        <button onClick={this.handleNameChange}>Change To Different Name</button>
      </div>
    );
  }
};

export default App;