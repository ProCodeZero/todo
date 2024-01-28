import TodoListItem from "../ToDoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((el) => {
    const { id, ...otherProps } = el;
    let classNames = "list-group-item";
    return (
      <li className={classNames} key={id}>
        <TodoListItem
          {...otherProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => {
            onToggleImportant(id);
          }}
          onToggleDone={() => {
            onToggleDone(id);
          }}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
