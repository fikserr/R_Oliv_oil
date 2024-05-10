import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Basket from '../components/basket'


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