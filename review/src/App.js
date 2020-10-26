import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren"
    }
  }

  handleNameChange = () => {
    console.log("here");
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>Hello {name}</h1>
        <button onClick={handleNameChange}>Change To Different Name</button>
      </div>
    );
  }
};

export default App;