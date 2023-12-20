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

// 1
// const mapDispatchToProps = (dispatch) => ({
//   inc: () => dispatch(increment),
//   dec: () => dispatch(decrement),
//   res: () => dispatch(reset)
// });

// 2
// const mapDispatchToProps = (dispatch) => ({
//   inc: bindActionCreators(increment, dispatch),
//   dec: bindActionCreators(decrement, dispatch),
//   res: bindActionCreators(reset, dispatch)
// });

// 3
// const mapDispatchToProps = {
//   inc: increment,
//   dec: decrement,
//   res: reset
// };

// const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter);
const Counter = connect(mapStateToProps, {
  inc: increment,
  dec: decrement,
  res: reset
})(_Counter);
