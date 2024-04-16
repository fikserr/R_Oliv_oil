
import HomeLayout from './layout/HomeLayout';
import ContextProvider from './context/Context';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import OilCard from './pages/OilCard';
import Reviews from './pages/Reviews';
import PaymentDelivery from './pages/PaymentDelivery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';






function App() {

 
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<HomeLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='oilcard' element={<OilCard/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='reviews' element={<Reviews/>}/>
            <Route path='paymentDelivery' element={<PaymentDelivery/>}/>
            <Route path='contact' element={<Contacts/>}/>

          </Route>

        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App
