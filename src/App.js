import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import {Characters} from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import SimpleCharacter from "./pages/SimpleCharacter";
import SimpleLocation from "./pages/SimpleLocation";
import SimpleEpisode from './pages/SimpleEpisode';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>



        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/characters/" component={Characters} />
        <Route path="/character/:id" component={SimpleCharacter} />
        <Route path="/locations/" component={Locations} />
        <Route path="/location/:id" component={SimpleLocation} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/episode/:id" component={SimpleEpisode} />
        <Route  component={NotFound} />


        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
