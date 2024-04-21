import { Outlet } from 'react-router-dom'
import Appbar from '../components/Appbar'







function RootLayout() {
  return (

    <div className='root scrollbar selection:text-bgPrimaryBg'>
    {/* // style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWU4WjzV34XZiunsRoRhAceL4iAvWgaVE_Q&s')"}}> */}
        <Appbar/>        
        <main className='main '>
            <Outlet/>
        </main>
    </div>


   
  )
}

export default RootLayout