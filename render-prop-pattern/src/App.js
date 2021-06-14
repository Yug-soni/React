import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter
          render={(count, incrementCount) => (
            <ClickCounter
              count={count}
              incrementCount={incrementCount}
            ></ClickCounter>
          )}
        ></Counter>

        <Counter
          render={(count, incrementCount) => (
            <HoverCounter
              count={count}
              incrementCount={incrementCount}
            ></HoverCounter>
          )}
        ></Counter>
      </header>
    </div>
  );
}

export default App;
