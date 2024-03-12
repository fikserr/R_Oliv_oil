import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Oilsection from './components/Oilsection';
import ContextProvider from './context/Context';
import './css/style.css';




function App() {


  return (
    <ContextProvider>
      < Navbar/> 
      < Header/>
      < Oilsection/>
      < Footer/>
    </ContextProvider>
  )
}

export default App
