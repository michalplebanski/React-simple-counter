class Counter extends React.Component {
  state = {
    count: 0,
    result: 0
  };

  handleMathClick = (type, number = 1) => {
    if (type === "substraction") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }));
    } else if (type === "reset") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: 0
      }));
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result + number
      }));
    }
  };

  render() {
    return (
      <>
        <button onClick={() => this.handleMathClick("substraction", 10)}>
          -10
        </button>
        <button onClick={() => this.handleMathClick("substraction")}>-1</button>
        <button onClick={() => this.handleMathClick("reset")}>Reset</button>
        <button onClick={() => this.handleMathClick("addition")}>+1</button>
        <button onClick={() => this.handleMathClick("addition", 10)}>
          +10
        </button>
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
