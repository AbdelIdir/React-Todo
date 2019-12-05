import React, { useState } from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.taskName}</p>
      </div>
    );
  }
}
