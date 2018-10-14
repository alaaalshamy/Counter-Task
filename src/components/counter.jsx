import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    tag: [],
    imgURL: "https://picsum.photos/23",
    margin: 10
  };
  sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url('https://picsum.photos/2023')"
  };
  buttonStyle = {
    margin: 10
  };
  render() {
    let classes = this.classeMethod();
    return (
      //style={this.sectionStyle}
      <div>
        {this.cheackTags()}
        <span className={classes}>{this.FormatZero()}</span>
        <button
          className="btn btn-secondary btm-sm "
          style={this.buttonStyle}
          onClick={() => this.props.onIncrement(this.props.counter)} //refernce
        >
          increment
        </button>
        <button
          className="btn btn-secondary btm-sm "
          style={this.buttonStyle}
          onClick={() => this.props.ondecrement(this.props.counter)} //refernce
        >
          decrement
        </button>
        <button
          className="btn btn-danger btm-sm sm-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  cheackTags() {
    if (this.state.tag.length === 0) {
      return <span className="alert alert-warning">"No Tags Found"</span>;
    }
    return (
      <ul>
        {this.state.tag.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  classeMethod() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  FormatZero() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
