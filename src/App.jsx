
import HomeLayout from './layout/HomeLayout';
import ContextProvider from './context/Context';
import About from './pages/about/';
import Contacts from './pages/contact/';
import Home from './pages/home/';
import OilCard from './pages/oilcard/';
import Reviews from './pages/reviews/';
import PaymentDelivery from './pages/payment/';
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
