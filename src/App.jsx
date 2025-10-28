import Navbar from './components/Navbar';
import About from './components/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ClickAnimation from './components/ClickAnimation';

function App() {
  return (

      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Navbar />
        <main>
          <About />
          <Education></Education>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
          {/* We'll add other sections here as we build them */}
        </main>
        
        {/* Toast Container for notifications */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        
        {/* Click Animation Component */}
        <ClickAnimation />
      </div>
  );
}

export default App;