import React from "react";

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.addtodo}>
          <label>
            To do :
            <input
              name="task"
              type="text"
              onChange={this.props.onValueChange}
            />
          </label>
          <button type="submit">Submit it </button>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
