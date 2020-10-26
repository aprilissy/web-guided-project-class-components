import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Allison"
    }
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>Hello {name}</h1>
      </div>
    );
  }
};

export default App;