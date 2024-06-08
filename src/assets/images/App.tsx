import './App.css'
import Navbar from './components/Navbar'
import { AudioPhile, Databiz, Maker, Meet } from './svgs'
import desktopimg from './assets/images/image-hero-desktop.png'
import mobileimg from './assets/images/image-hero-mobile.png'
import databiz from './assets/images/client-databiz.svg'
function App() {
  return (
    <header className=' h-[100dvh] w-[100dvw] flex flex-col '>
        <Navbar/>
        <div className='w-fulls h-fulls flex flex-col-reverse lg:flex-row  lg:px-20 lg:py-0  border-red-500'>
          <HeaderText/> 
          <HeaderImage/>
        </div>
    </header>
  )
}

export default App

export const HeaderText = () =>{
  return(
    <div className=" w-full  h-full flex  flex-col gap-6 justify-evenly items-center  border-blue-500">
          
           <h1 className='text-[2.5rem] lg:text-[4rem]  font-extrabold leading-[4rem] '>Make remote work</h1>
            <h2 className='text-center text-[1.4rem] border w-fusll lg:text-[1.2rem] font-[400] text-gray-600 px-4 self-start  lg:text-left'> Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</h2>
         
            <button className='py-3 w-fit rounded-lg bg-black text-white px-5'>
              Learn more
            </button>
            <HeaderBrands/>
          </div>
  )
}
export const HeaderImage = () =>{
  return(
    <div className="flex justify-center items-center  w-full h-full   border-green-500  ">
            <div className='w-full lg:max-w-[550px] h-full'>
               {/*  <picture className="w-full h-full">
                  <source media="(min-width: 1024px)" srcSet={desktopimg} type="image/png"/>
                </picture> */}
                <img src={mobileimg} alt="image-hero" height={"100%"} className='h-full' />
          </div>
          </div>
  )
}
export const HeaderBrands = () =>{
  return(
    <div className='w-full flex justify-evenly items-center  px-3'>
        
            <img src={databiz} />
            
            <AudioPhile /> <Meet /> <Maker />
            </div>
  )
}