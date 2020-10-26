import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren"
    }
  }

  render() {
    return (
      <div>
        <h1>Hello {name}</h1>
      </div>
    );
  }
};

export default App;