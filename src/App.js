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
import ArtistList from "./pages/Artists";
import ArtistInfo from "./pages/ArtistInfo";
import useMatchMedia from "./components/useMatchMedia";
import NavigationBarMobile from "./components/NavigationBar/NavigationBarMobile";


function App() {
    const { isLoading } = useAuth();
    const isDesktopResolution = useMatchMedia('(min-width:992px)', true)
    return isLoading ? (
        <div className="centre">
            <div className="note one"></div>
            <div className="note two"></div>
            <div className="note three"></div>
            <p>Laden...</p>
        </div>
    ) : (
        <Router>
            { isDesktopResolution ? (
                <NavigationBar />
                ) : (
                    <NavigationBarMobile />
            )}
            <Hero/>
            <Switch>
                <PrivateRoute exact path="/">
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
                <Route path="/Artist-page">
                    <ArtistList />
                </Route>
                <Route path="/Artist-info">
                    <ArtistInfo />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
