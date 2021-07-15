import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {Hero} from "./components/Hero/Hero";
import {useOptionContext} from "./context/SelectedOptionsProvider";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./pages/Login"
import Ontdekken from "./pages/Ontdekken";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import {useAuth} from "./context/AuthContext";
import ArtistList from "./pages/Artists";
import ArtistInfo from "./pages/ArtistInfo";
import useMatchMedia from "./components/useMatchMedia";
import NavigationBarMobile from "./components/NavigationBar/NavigationBarMobile";
import SideMenu from "../src/components/NavigationBar/SideMenu"


function App() {
    const { isLoading } = useAuth();
    const isDesktopResolution = useMatchMedia('(min-width:992px)', true)
    const {showMenu} = useOptionContext();

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
            { showMenu &&
                <SideMenu />
             }
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
