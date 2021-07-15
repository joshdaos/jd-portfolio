import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <Router>


    <div className="app__container">
      <h1>Portfolio Site</h1>
      
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

    </div>

    </Router>
  );
}

export default App;
