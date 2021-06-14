import "./App.css";
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Hero heroName="Iron Man" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Thor" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
