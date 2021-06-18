import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SimpleCharacter from "./components/characters/SimpleCharacter";
import SimpleLocation from "./components/locations/SimpleLocation";
import SimpleEpisode from "./components/episodes/SimpleEpisode";

import Header from "./components/assets/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import Footer from "./components/assets/Footer";
import NotFound from "./pages/NotFound";

import Modal from "./components/assets/ModalWindow/Modal";
import ADSlider from "./components/assets/ADSlider";

function App() {
  return (
    <div className="App">
      <Modal />
      <Router basename='/rick-and-morty'>
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
          <Route component={NotFound} />
        </Switch>
        <ADSlider />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
