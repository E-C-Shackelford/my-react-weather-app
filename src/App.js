import City from "./City";
import Date from "./Date";
import Temperature from "./Temperature";
import Condition from "./Condition";
import ConditionIcon from "./ConditionIcon";
import WindIcon from "./WindIcon";
import Wind from "./Wind";
import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
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
  );
}

export default App;
