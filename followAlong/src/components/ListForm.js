import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      input:e.target.value
    });
  };

  // class property to submit form
  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.handleAddItem(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input value={this.state.input} onChange={this.handleChanges} type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;