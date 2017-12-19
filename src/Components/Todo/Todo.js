import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Todo extends Component {

    constructor() {
        super();
    
        this.state = {
          todo: '',
          todo_id: '',
        };

      }

    componentWillMount() {
        // 42J
        // 42k
        axios.get(`/api/todo/${this.props.match.params.todo}`)
          .then((response) => {
            this.setState({
              todo: response.data[0].todo,
              todo_id: response.data[0].todo_id
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

export default connect(mapStateToProps, {})(Todo);
