import Header from '../../components/header'
import OilCard from '../oilcard'
import Reviews from '../reviews'
import About from '../about'
import PaymentDelivery from '../payment'
import Contacts from '../contact'
import Footer from '../../components/footer/'

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