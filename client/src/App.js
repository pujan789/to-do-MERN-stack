import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css"; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

const API_BASE = "http://localhost:3001";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState('all'); // 'all', 'active', or 'complete'

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    fetch(API_BASE + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error: ", err));
  };

  const completeTodo = async (id) => {
    await axios
      .patch(`http://localhost:3001/todo/complete/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });

    getTodos();
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(`http://localhost:3001/todo/delete/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });

    getTodos();
  };

  const toggleFilter = (type) => {
    setFilterType(type);
  };

  const filteredTodos = todos.filter(todo => {
    if (filterType === 'all') return true;
    return filterType === 'active' ? !todo.complete : todo.complete;
  });

  return (
    <main className="app">
      <nav className="nav">
        <span className={`nav__item ${filterType === 'all' ? 'active' : ''}`} onClick={() => toggleFilter('all')}>All</span>
        <span className={`nav__item ${filterType === 'active' ? 'active' : ''}`} onClick={() => toggleFilter('active')}>Active</span>
        <span className={`nav__item ${filterType === 'complete' ? 'active' : ''}`} onClick={() => toggleFilter('complete')}>Complete</span>
      </nav>
      <div className="add">
        <div className="add__priority">
          <label className="add__radio" title="Priority 0">
            <input checked type="radio" name="priority" />
            <span className="add__circle"></span>
          </label>
          <label className="add__radio add__radio--1" title="Priority 1">
            <input type="radio" name="priority" />
            <span className="add__circle"></span>
          </label>
          <label className="add__radio add__radio--2" title="Priority 2">
            <input type="radio" name="priority" />
            <span className="add__circle"></span>
          </label>
          <label className="add__radio add__radio--3" title="Priority 3">
            <input type="radio" name="priority" />
            <span className="add__circle"></span>
          </label>
        </div>
        <input placeholder="+ Add todo item" type="text" className="add__input" />
      </div>
      <ul className="list">
        {filteredTodos.map(todo => (
          <li className={"item " + (todo.complete ? "done" : "")} key={todo._id}>
            {/* your existing rendering logic */}
            <label className={`item__checkbox item__checkbox--${todo.priority}`}>
              <input onClick={() => completeTodo(todo._id)} checked type="checkbox" />
              {todo.complete ? <FontAwesomeIcon icon={faCheck} /> : null}
            </label>
            {todo.text}
            <button className="item__delete" onClick={() => deleteTodo(todo._id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
