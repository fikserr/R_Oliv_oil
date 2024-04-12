
import Basket from '../components/Basket'
import Navbar from '../components/Navbar'
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