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
        <MathButton
          name="-10"
          number={10}
          type="substraction"
          click={this.handleMathClick}
        />

        <MathButton
          name="-1"
          number={1}
          type="substraction"
          click={this.handleMathClick}
        />

        <MathButton 
          name="Reset" 
          type="reset" 
          click={this.handleMathClick} 
        />

        <MathButton 
          name="1" 
          number={1} 
          type="" 
          click={this.handleMathClick} 
        />
        
        <MathButton
          name="10"
          number={10}
          type=""
          click={this.handleMathClick}
        />
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}

const MathButton = props => {
  console.log(props);
  return (
    <button onClick={() => props.click(props.type, props.number)}>
      {props.name}
    </button>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
