import { Component } from "react";
import "./SearchPanel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
		// Заношу значение поля в переменную
    const term = e.target.value;
		// Изменяю значение state на значение поля ввода
    this.setState({ term });
		// Передаю значение поля ввода в App
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        placeholder="Type here to search..."
				// Назначаю значение для поля из state
        value={this.state.term}
				// Вешаю событие на изменение поля
        onChange={this.onSearchChange}
      />
    );
  }
}
