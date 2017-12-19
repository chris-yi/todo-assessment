import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getTodos } from "../../ducks/todos";

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
          <button>edit</button>
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
