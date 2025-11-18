import logo from "./logo.svg";
import "./App.css";
import FetchData from "./FetchData";
import AxiosData from "./AxiosData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>TP – Consommer une API avec React</h1>
          <FetchData />
          <AxiosData />
        </div>
      </header>
    </div>
  );
}

export default App;
