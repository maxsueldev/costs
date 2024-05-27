import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Container from './components/layout/Container';

import Navbar from "./components/layout/Navbar";
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}

export default App
