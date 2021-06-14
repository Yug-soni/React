import "./App.css";
import HomePage from "./Components/HomePage";
import { UserProvider } from "./Components/userContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider value="Yug">
          <HomePage />
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
