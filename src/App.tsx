import './App.css'
import Navbar from './components/Navbar'
import desktopimg from './assets/images/image-hero-desktop.png'
import mobileimg from './assets/images/image-hero-mobile.png'
import databiz from './assets/images/client-databiz.svg'
import audiophile from './assets/images/client-audiophile.svg'
import meet from './assets/images/client-meet.svg'
import maker from './assets/images/client-maker.svg'
function App() {
  return (
    <header className=' h-[100dvh] w-[100dvw] flex flex-col '>
         <Navbar/>
         <div className='w-fulls h-full flex flex-col-reverse gap-5 lg:flex-row  items-center
         lg:px-20 lg:py-0'>
          <HeaderText/> 
          <HeaderImage/> 
        </div>  
    </header>
  )
}
export default App
export const HeaderText = () =>{
  return(
    <div className="w-full  h-[80%] px-[1.5rem] flex  flex-col md:gap-8 gap-6 md:justify-center items-center ">
          
           <h1 className='text-[2.5rem] md:text-[4.9rem] text-center md:text-start  font-extrabold 
           
           leading-[4rem] '>Make remote work</h1>
            <h2 className='text-center text-[1.1rem]   lg:text-[1.2rem] font-[400] text-gray-600 px-4 self-start  lg:text-left'> Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</h2>
         
            <button className='py-3 w-fit rounded-lg border border-black bg-black text-white px-5 transition-all duration-300 hover:bg-white font-bold hover:text-black '>
              Learn more
            </button>
            <HeaderBrands/>
          </div>
  )
}
export const HeaderImage = () =>{
  return(
    <div className="flex justify-center items-center  w-full    ">
            <div className='w-full max-w-[500px]  h-full  '>
                <picture className='h-full w-full'>
                  <source media="(min-width: 1024px)" srcSet={desktopimg} type="image/png"/>
                  <img src={mobileimg} alt="image-hero"/>
                </picture>
        </div>
    </div>
  )
}
export const HeaderBrands = () =>{
  return(
    <div className='w-full flex h-10  justify-evenly items-center  px-3'>
            <img src={databiz} className='h-ful w-1/5 max-w-[100px]'/>
            <img src={audiophile} className='h-ful w-1/5 max-w-[100px]'/>
            <img src={meet} className='h-ful w-1/5 max-w-[100px]'/>
            <img src={maker} className='h-ful w-1/5 max-w-[100px]'/>
    </div>
  )
}