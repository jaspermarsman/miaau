import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {Hero} from "./components/Hero/Hero";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./pages/Login"
import Ontdekken from "./pages/Ontdekken";
import SignUp from "./pages/SignUp";
import WebPlayer from "./pages/WebPlayer";
import PrivateRoute from "./components/PrivateRoute";

import {useAuth} from "./context/AuthContext";


function App() {
    const { isLoading } = useAuth();
    return isLoading ? (
        <div className="centre">
            <div className="note one"></div>
            <div className="note two"></div>
            <div className="note three"></div>
            <p>Loading...</p>
        </div>
    ) : (
        <Router>
            <NavigationBar/>
            <Hero/>
            <Switch>
                <PrivateRoute path="/Ontdekken">
                    <Ontdekken/>
                </PrivateRoute>
                <Route path="/Login">
                    <Login/>
                </Route>
                <Route path="/Signup">
                    <SignUp/>
                </Route>
                <Route path="/WebPlayer">
                    <WebPlayer/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
