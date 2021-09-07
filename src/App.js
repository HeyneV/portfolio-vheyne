//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Container from './components/Container';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Nav />

      <Container>
        <Router>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
