import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.atask;

    return (
      <div>
        {data.map(task => (
          <Todo taskName={task.task} />
        ))}
      </div>
    );
  }
}
export default TodoList;
