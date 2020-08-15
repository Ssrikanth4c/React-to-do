import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
export default class AddTodoApp extends React.Component {
  constructor(porps) {
    super();
    this.state = {
      todo: [],
      todoInput: ""
    };
  }
  handleChange = e => {
    this.setState({
      todoInput: e.target.value
    });
  };

  handleSubmit = () => {
    let item = {
      Additem: this.state.todoInput,
      status: false,
      id: uuidv4()
    };
    this.setState({
      todo: [...this.state.todo, item]
    });
  };

  // handle remove
  // remove slected todo item whne id is match
  handleRemove = id => {
    this.setState({
      todo: this.state.todo.filter(item => item.id !== id)
    });
  };
  //update the edit todo item
  updateHandler = (id, value) => {
    let updatedTodoItem = this.state.todo.map(item =>
      id !== item.id
        ? item
        : {
            ...item,
            Additem: value
          }
    );
    this.setState({
      todo: updatedTodoItem
    });
  };
  //handle toggle todo task is complete it should move to compteted list
  handleToggle = id => {
    let updatedTodoItem = this.state.todo.map(item =>
      id !== item.id
        ? item
        : {
            ...item,
            status: !item.status
          }
    );
    this.setState({
      todo: updatedTodoItem
    });
  };

  componentDidUpdate() {
    console.log(this.state.todo);
  }
  render() {
    const { todo } = this.state;
    return (
      <div>
        <div className="container border ">
          <div className="row">
            <div className="col-10">
              {/* ********************** input Box ********************** */}
              <input
                id="todoInput"
                className="p-2 mx-1 w-100 h3"
                type="text"
                value={this.state.todoInput}
                onChange={this.handleChange}
              />
            </div>
            {/* **********************Add ToDo Button********************** */}
            <div className="col-2">
              <button
                className="btn btn-success py-3 btn-block "
                onClick={this.handleSubmit}
              >
                <strong>ADD</strong>
              </button>
            </div>
          </div>
          {/* display add todo list */}

          {/* **********************display add todo items as list********************** */}
          <TodoList
            label="TODO"
            handleRemove={this.handleRemove}
            updateHandler={this.updateHandler}
            handleClick={this.handleToggle}
            /* default status is false
            -- if status is false todo's are not completed 
            */

            todo={todo.filter(item => !item.status)}
          />

          {/* **********************dispaly completed todo items as a list********************** */}
          <TodoList
            label="COMPLETED"
            handleRemove={this.handleRemove}
            updateHandler={this.updateHandler}
            handleClick={this.handleToggle}
            /**
             * if status is true todo's are completed and which are in Completed Block
             */
            todo={todo.filter(item => item.status)}
          />
        </div>
      </div>
    );
  }
}
