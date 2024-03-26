import React from 'react'
import Header from '../components/Header'
import OilCard from './OilCard'
import Reviews from './Reviews'
import About from './About'
import PaymentDelivery from './PaymentDelivery'
import Contacts from './Contacts'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <OilCard/>
        <About/>
        <Reviews/>
        <PaymentDelivery/>
        <Contacts/>
        <Footer/>

    </div>
  )
}

export default Home