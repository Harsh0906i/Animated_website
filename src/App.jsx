import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Home ,Contact,About} from './Pages';
function App() {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;