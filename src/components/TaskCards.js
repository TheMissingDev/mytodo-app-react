import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const TaskCards = (props) => {
  const [storTask, setStorTask] = useState([]);
  function deleteTask(index) {
    const updatedTasks = props.todo.filter((data) => {
      return index !== data.id;
    });
    props.setTodo(updatedTasks);
  }
  return (
    <div className="taskCard">
      {props.todo.length > 0 ? (
        <ol>
          {props.todo.map((data) => (
            <li key={data.id}>
              <label id="tskLb" htmlFor={`${data.id}`}>
                <input type="checkbox" className={`check ${data.id}`} />
                <h3 className="task">{data.name}</h3>
                <span className="check"></span>
              </label>
              <h4 className="date">{data.date}</h4>
              <button onClick={() => deleteTask(data.id)} className="delIcon">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <h1 className="tsk">No tasks to show</h1>
      )}
    </div>
  );
};

export default TaskCards;
