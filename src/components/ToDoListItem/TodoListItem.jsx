import "./TodoListItem.css";

const ToDoListItem = ({
  label,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  important,
  done,
}) => {
  let classNames = "todo-list-item";
  if (done) {
    classNames += " done";
  }
  if (important) {
    classNames += " important";
  }
  return (
    <>
      <span className={classNames}>{label}</span>
      <button
        type="button"
        className="btn todo-list__btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="fa fa-trash-o" />
      </button>
      <button
        type="button"
        className="btn todo-list__btn btn-outline-warning btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        className="btn todo-list__btn btn-outline-success btn-sm float-right"
        onClick={onToggleDone}
      >
        <i className="fa fa-check"></i>
      </button>
    </>
  );
};

export default ToDoListItem;
