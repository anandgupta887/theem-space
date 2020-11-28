import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Notice from "./Components/Notice";
import Login from "./Components/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/admin/login">
            <Login />
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
