import "./App.css";
import { useState, useEffect } from "react";
import TaskCards from "./components/TaskCards";
const getTsk = () => {
  let list = localStorage.getItem("list");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
function App() {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState(getTsk());
  const [click, isClicked] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [date, setDate] = useState({});

  // Updating the value whenever the todo value changes
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todo));
  }, [todo]);
  const toggleTheme = () => {
    if (!isDark) {
      console.log("dark");
      return setIsDark(true);
    } else if (isDark) {
      console.log("!Dark");
      return setIsDark(false);
    }
  };
  const handleclick = () => {
    console.log(val);
    isClicked(true);

    if (!val && !todo) {
    } else {
      const InputData = {
        name: val,
        id: new Date().getTime().toString(),
        date: new Date().toLocaleDateString(),
      };
      setDate(new Date().toLocaleDateString());
      setTodo([...todo, InputData]);
      setVal("");
    }
    if (val <= 0) {
      alert("Characters atleast be greater then 0");
    }
  };
  useEffect(() => {
    setDate((date) => {
      localStorage.setItem("date", date);
    });
  });
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <div className="togg">
        <span onClick={() => toggleTheme()} className="toggle"></span>
        <label id="toggle" onClick={() => toggleTheme()} htmlFor="toggle">
          {isDark ? "Li" : "Dr"}
        </label>
      </div>
      <div className="main-todo">
        <h1>My To-Do</h1>
        <div className="input-form">
          <div className="input">
            <input
              type="text"
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
              }}
              id="taskIN"
              placeholder="do chores..."
            />
            <span></span>
          </div>
          <button onClick={handleclick} id="addBtn">
            Add Task
          </button>
        </div>
      </div>
      <TaskCards
        todo={todo}
        setTodo={setTodo}
        click={click}
        date={date}
        handleClick={handleclick}
      />
    </div>
  );
}

export default App;
