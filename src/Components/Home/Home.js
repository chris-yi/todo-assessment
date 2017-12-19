import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getTodos } from "../../ducks/todos";
import Functional from "../Functional/Functional"

// 42H
class Home extends Component {
  constructor() {
    super();
    this.handleGetTodos = this.handleGetTodos.bind(this);
  }

  handleGetTodos() {
    // 44C, 44D
    axios.get(`/api/todos`).then(results => {
      console.log(results.data);
      this.props.getTodos(results.data);
    });
  }

  render() {
    return (
      <div>
        <Functional
        name={"Hello"}
        />
        {/* 42E */}
        <Link to={`/todos`}>
          <button onClick={this.handleGetTodos}>Todos</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

// 43C
export default connect(mapStateToProps, { getTodos })(Home);
