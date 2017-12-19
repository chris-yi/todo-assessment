import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getTodos } from "../../ducks/todos";
import { Link } from "react-router-dom";

class TodoCard extends Component {

  deleteTodo = () => {
    axios.delete(`/api/delete/${this.props.todo_id}`).then(() => {
        axios.get(`/api/todos`).then(results => {
          this.props.getTodos(results.data);
        });
      });
  }

  render() {
    return (
      <div>
        <p>
          {this.props.todo}
          <Link to={`/todo`}>
          <button>edit</button>
          </Link>
          <button onClick={this.deleteTodo}>delete</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, { getTodos })(TodoCard);
