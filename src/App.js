import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      todo: [
        {
          task: "clean car",
          id: Date.now(),
          completed: false
        }
      ],
      formValues: {
        task: ""
      }
    };
  }

  onValueChange = event => {
    const { name, value } = event.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    });
  };

  addtodo = event => {
    event.preventDefault();
    //logic to add the task
    console.log(this.state.formValues.task);

    const newTodo = {
      task: this.state.formValues.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList atask={this.state.todo} />
        <ToDoForm onValueChange={this.onValueChange} addtodo={this.addtodo} />
      </div>
    );
  }
}

export default App;
