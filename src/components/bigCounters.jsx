import React, { Component } from "react";
import Counter from "./counter";
class BigCounters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
        <button
          className="btn btn-info btm-sm sm-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default BigCounters;
