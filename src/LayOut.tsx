
import Header from './components/header' 
import Footer from './components/Footet'
import { Outlet } from 'react-router-dom'
function LayOut() {
  
  return (
    <div className='w-full'>
       <main className="">
         <Header/>
         <div className="">
           <Outlet />
        </div>
        <Footer />
       </main>
    </div>
  )
}

export default LayOut