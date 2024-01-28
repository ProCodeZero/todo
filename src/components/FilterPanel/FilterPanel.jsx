import { Component } from "react";
import "./FilterPanel.css";

export default class FilterPanel extends Component {
  btns = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const btns = this.btns.map(({ name, label }) => {});

    return (
      <div className="filter-panel">
        <button type="button" className="btn filter-btn filter-btn-active">
          All
        </button>
        <button type="button" className="btn filter-btn filter-btn-not-active">
          Active
        </button>
        <button type="button" className="btn filter-btn filter-btn-not-active">
          Done
        </button>
      </div>
    );
  }
}
