import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { Component } from "react";
import { increment, decrement, reset } from "./store";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <Counter x="1" />
    </div>
  );
}

class _Counter extends Component {
  render() {
    // const dispatch = this.props.dispatch;
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.dec}>-</button>
        <button onClick={this.props.inc}>+</button>
        <button onClick={this.props.res}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count
});


// const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter);
const Counter = connect(mapStateToProps, {
  inc: increment,
  dec: decrement,
  res: reset
})(_Counter);
