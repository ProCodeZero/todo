import { Component } from "react";
import "./AddForm.css";

export default class AddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: " ",
    });
  };

  render() {
    return (
      <form className="add-panel" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Type here to add some Task..."
          value={this.state.label}
        ></input>
        <button className="btn add-panel__button">Add Task</button>
      </form>
    );
  }
}
