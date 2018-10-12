import React, { Component } from "react";
import Counter from "./counter";
class BigCounters extends Component {
  state = {
    counters: [
      {
        id: 0,
        value: 4
      },
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      }
    ]
  };

  handelIncrement = counter => {
    const newCounter = [...this.state.counters];
    newCounter[counter.id].value++;

    this.setState({ counters: newCounter });
  };
  handelReset = () => {
    const newCounterValue = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: newCounterValue });
  };

  handelDelete = counterID => {
    const newCounter = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: newCounter });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handelDelete}
            onIncrement={this.handelIncrement}
            counter={counter}
          />
        ))}
        <button className="btn btn-info btm-sm sm-2" onClick={this.handelReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default BigCounters;
