// 37E-1
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, getTodos } from "../../ducks/todos";
import axios from "axios";
import TodoCard from "./TodoCard";

class Todos extends Component {
    // 36I
  constructor(props) {
    super(props);

    // 36C
    this.state = {
      inputValue: ""
    };
    // 37C
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Mounted!");
  }

    // 36J
  handleChange(e) {
    // 36D
    this.setState({
      inputValue: e.target.value
    });
  }

  handleClick() {
    axios
      .post("/api/newtodo", {
        todo: this.state.inputValue
      })
      .then(() => {
        console.log("todo created");
      });
    this.props.addTodo({ todo: this.state.inputValue });
  }

  // 36F
  render() {
    const resultsArr = this.props.todos
      ? // 37D
        this.props.todos.map((e, i) => {
          //   36E, 36H
          return <TodoCard key={i} todo={e.todo} todo_id={e.todo_id} />;
        })
      : null;

    return (
      // 36G
      <div className="App">
        <h1>Chris' To-Do List:</h1>
        <input
          onChange={this.handleChange}
          value={this.state.inputValue}
          placeholder="Type a new todo..."
        />
        <button onClick={this.handleClick} type="" className="">
          ADD
        </button>
        <div>{resultsArr}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

// 37E-2
export default connect(mapStateToProps, { addTodo, getTodos })(Todos);
