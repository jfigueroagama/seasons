import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // Special function particular to javascript no specif to React
  // this function is going to be called every time this class will
  // be created

  // super(props) is a reference to the super construction function
  // this.state = {} an object
  // This is the only time we call this.state

  //constructor(props) {
  //  super(props);
  //  this.state = { lat: null, errorMessage: "" };
  //}

  // This is equivalent to define a 'constructor' and initialize 'state'
  // Babel will take this line and build the constructor
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // Every time we want to update a property in our 'state'object, we call 'setState'
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // We define a helper function
  renderContent() {
    // we can reference an object between {}
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMassage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      // We are passing {this.state.lat} to SeasonDisplay as a prop
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  // This is a requirement of React, we need to define render()
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
