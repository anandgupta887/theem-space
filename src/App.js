import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Notice from "./Components/Notice";
import Contact from "./Components/Contact";
import Admin from "./Components/Admin";
import Notes from "./Components/Notes";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/notes">
            <Header />
            <Notes />
            <Footer />
          </Route>
          <Route path="/contact-us">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/notices/:id">
            <Header />
            <Notice />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
