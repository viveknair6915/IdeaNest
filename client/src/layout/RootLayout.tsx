import { Outlet } from 'react-router-dom'
import Appbar from '../components/Appbar'







function RootLayout() {
  return (
    
      
    <div className='root scrollbar selection:text-bgPrimaryBg'>
        <Appbar/>        
        <main className='main'>
            <Outlet/>
        </main>
    </div>

   
  )
}

export default RootLayout