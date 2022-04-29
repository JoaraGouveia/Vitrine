import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produto" exact component={Produto} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
