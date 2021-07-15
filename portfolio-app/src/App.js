import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <body>
    <Router>
    <div className="app__container">

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>

      <nav>
        <ul>
          <li className="nav__links-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__links-li">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__links-li">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="nav__links-li">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav__links-li">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <ul className="media__links">
        <li>
        <i id="media__links-li" className="fab fa-linkedin"></i>
        </li>
        <li>
        <i id="media__links-li" className="fab fa-instagram"></i>
        </li>
        <li>
        <i id="media__links-li" className="fab fa-twitter"></i>
        </li>
        <li>
        <i id="media__links-li" className="fas fa-user-circle"></i>
        </li>
      </ul>

    </div>
    </Router>
    </body>
  );
}

export default App;
