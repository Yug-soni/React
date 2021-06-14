import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter name="I" />
        <HoverCounter name="U" />
      </header>
    </div>
  );
}

export default App;
