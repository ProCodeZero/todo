import "./AppHeader.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <header className="header">
      <h1>ToDo App</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </header>
  );
};

export default AppHeader;
