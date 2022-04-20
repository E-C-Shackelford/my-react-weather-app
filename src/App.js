import logo from "./logo.svg";
import City from "./City";
import Date from "./Date";
import Temperature from "./Temperature";
import Condition from "./Condition";
import ConditionIcon from "./ConditionIcon";
import WindIcon from "./WindIcon";
import Wind from "./Wind";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="App">
          <body>
            <form>
              <div className="container">
                <div className="container main">
                  <City />
                  <Date />
                  <Temperature />
                  <div className="weather-conditions">
                    <Condition />
                    <ConditionIcon />
                    <WindIcon />
                    <Wind />
                  </div>
                  <Search />
                  <Footer />
                </div>
              </div>
            </form>
          </body>
        </div>
        ); }
      </header>
    </div>
  );
}

export default App;
