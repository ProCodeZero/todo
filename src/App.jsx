import { Component } from "react";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/ToDoList/TodoList";
import FilterPanel from "./components/FilterPanel";
import AddForm from "./components/AddForm";
import "./App.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createToDoItem("Drink Tea"),
      this.createToDoItem("Learn React"),
      this.createToDoItem("Learn TypeScript"),
      this.createToDoItem("Eat an apple"),
    ],
  };

  createToDoItem(label) {
    return { label, imoprtant: false, done: false, id: this.maxId++ };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createToDoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  onToggleFunction = (arr, id, toggleParam) => {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [toggleParam]: !oldItem[toggleParam] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.onToggleFunction(todoData, id, "important") };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.onToggleFunction(todoData, id, "done") };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="panels">
          <SearchPanel />
          <FilterPanel />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddForm addItem={this.addItem} />
      </>
    );
  }
}
