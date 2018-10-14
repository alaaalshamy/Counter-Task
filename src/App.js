import React, { Component } from "react";
import "./App.css";
import BigCounters from "./components/bigCounters";
import Navbar from "./components/navbar";

class App extends Component {
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
  handeldecrement = counter => {
    const newCounter = [...this.state.counters];
    if (newCounter[counter.id].value !== 0) newCounter[counter.id].value--;

    this.setState({ counters: newCounter });
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
      <React.Fragment>
        <Navbar
          totalcounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <BigCounters
            counters={this.state.counters}
            onReset={this.handelReset}
            onDelete={this.handelDelete}
            onIncrement={this.handelIncrement}
            ondecrement={this.handeldecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
