import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    console.log("Component did mount");
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data[0].title,
          body: data[0].body
        })
      );
  }

  // componentWillMount() {
  //   console.log("Component wil mount");
  // }
  // componentDidUpdate() {
  //   console.log("Component did update");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
