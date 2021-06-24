import './App.css';
import {NavigationBar} from "./components/NavigationBar";
import {Hero} from "./components/Hero";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./pages/Login"
import Ontdekken from "./pages/Ontdekken";

function App() {
  return (
      <Router>
          <div>
              <NavigationBar/>
              <Hero/>
              <Switch>
                  <Route path="/Login">
                      <Login />
                  </Route>
                  <Route path="/Ontdekken">
                      <Ontdekken />
                  </Route>
              </Switch>

          </div>
      </Router>
  );
}

export default App;
