import { Component } from "react";
import "./FilterPanel.css";

export default class FilterPanel extends Component {
  btns = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const btns = this.btns.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "filter-btn-active" : "filter-btn-not-active";
      return (
        <button
          type="button"
          className={`btn filter-btn ${clazz}`}
          key={name}
          onClick={() => {
            onFilterChange(name);
          }}
        >
          {label}
        </button>
      );
    });

    return <div className="filter-panel">{btns}</div>;
  }
}
