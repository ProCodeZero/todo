import { Component } from "react";
import "./FilterPanel.css";

export default class FilterPanel extends Component {
  render() {
    return (
      <div className="filter-panel">
        <button type="button" className="btn btn-left btn-active">
          All
        </button>
        <button type="button" className="btn btn-center btn-not-active">
          Active
        </button>
        <button type="button" className="btn btn-right btn-not-active">
          Done
        </button>
      </div>
    );
  }
}
