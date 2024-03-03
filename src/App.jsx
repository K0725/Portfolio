import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import Me from "./components/Me/Me";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from "./components/Contact_form/ContactForm";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Me />
        <About />
        <Projects />
        <Contact />
        {/* <Routes>
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;