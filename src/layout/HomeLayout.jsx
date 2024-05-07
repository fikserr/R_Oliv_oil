
import Basket from '../components/basket'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'


function HomeLayout() {
  
  return (
    <div>
        <Navbar/>
        <Basket/>
        <Outlet/>
        
    </div>
  )
}

export default HomeLayout