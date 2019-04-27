class Counter extends React.Component {
  state = {
    count: 0,
    result: 0
  };

  handleMathClick = (type, number = 1) => {
    if (type === "subtraction") {
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
          type="subtraction"
          click={this.handleMathClick}
        />

        <MathButton
          name="-1"
          number={1}
          type="subtraction"
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
        <ResultPanel 
          count={this.state.count}
          result={this.state.result}
        />

      </>
    );
  }
}

const MathButton = props => {
  return (
    <button onClick={() => props.click(props.type, props.number)}>
      {props.name}
    </button>
  );
};

const ResultPanel = (props) => {

  return (
    <>
      <h1>Liczba kliknięć: {props.count} {props.count > 10 ? <span>Przeciążenie!</span> : null} </h1>
      <h1>Wynik: {props.result}</h1>
    </>
  )
}

ReactDOM.render(<Counter />, document.getElementById("root"));
