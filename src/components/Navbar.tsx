import { useState } from 'react'
import { ArrowDown, ArrowUp, Calendar, Close, Logo, Menu, Planning, Reminders, Todos } from '../svgs'
type subType={
    name:string,
    link:string,
    icon?:any
}

type navigationType={
    name:string,
    subs?:subType[],
    link?:string
}
const navigation:navigationType[] = [
    {
        name:"Features",
        subs:[
            {
                name:"Todo List",
                link:"",
                icon:<Todos  className="shrink-0"/>
            },{
                name:"Calendar",
                link:"",
                icon: <Calendar className="shrink-0"/>
            },{
                name:"Reminders",
                link:"",
                icon:<Reminders className="shrink-0"/>
            },{
                name:"Planning",
                link:"",
                icon:<Planning className="shrink-0" />
            }
        ],
        link:""
    },
    {
        name:"Company",
        subs:[
            {
                name:"History",
                link:"",
            },{
                name:"Our team",
                link:"",
            },{
                name:"Blog",
                link:"",
            }
        ],
        link:""
    },
    {
        name:"Careers",
        link:""
    },
    {
        name:"About",
        link:""
    }
]

const Navbar = () =>{
    const [open,setOpen]=useState(false)
    return(
        <nav className='h-navheight relative gap-5 w-full  bg-white shrink-0 flex justify-between items-center px-10'>
            <Logo className ="shrink-0" />
              {open &&  <div onClick={()=>setOpen(false)} className='fixed md:hidden top-0 left-0 h-screen w-screen bg-[#0005]' ></div>}
            <Menu onClick={()=>setOpen(!open)} className="md:hidden cursor-pointer" />
            <Menus open={open} close={setOpen} />


        </nav>
    )
}
export default Navbar

export const Menus= ({open,close}:any)=>{
    const [SubOpen,setSubOpen]=useState(null)

    return(
        <div className={`fixed md:relative  md:w-full ml-16 top-0 bg-white right-0 ${!open ?"w-[0px]" : "w-[250px]" }
        p-0
        h-full max-sm:duration-[500ms] max-sm:animate-transRight `}>
        <ul className={`px-4 py-5 md:p-0 md:flex-row flex gap-4 flex-col  overflow-hidsden  h-full bg `}>
            <li className='ml-auto md:hidden cursor-pointer'> <Close onClick={()=>close(false)} /> </li>
            {
                navigation.map((nav,i)=>{
                    return(
           <MenuSub nav={nav} key={i} index={i} SubOpen={SubOpen} setSubOpen={setSubOpen} />
                    )
                })
            }
            <li className=' items-center overflow-hidden  flex  md:w-fit md:ml-auto w-full py-2' >
            <div className='flex items-center px-2 justify-center'>
       <p className=' text-nowrap text-gray-500 hover:text-black cursor-pointer' >Login</p>
       </div></li>
            <li className='items-center overflow-hidden max-sm:justify-center  md:w-fit w-full flex rounded-lg 
            ' >
            <div className='flex group items-center p-2 justify-center cursor-pointer rounded-lg w-full   border-2 hover:border-black'>
       <p className=' text-nowrap text-gray-500 group-hover:text-black ' >Register</p>
       </div>
                </li>
        </ul>
        </div>
        )
}

export const MenuSub = ({nav,index,SubOpen,setSubOpen}:any) =>{
    const close = () =>{
        index === SubOpen ? setSubOpen(null) : setSubOpen(index)
    }
    return(
        <li className='group w-full relative p-2 md:w-fit md:flex items-center max-sm:flex-col cursor-pointer'> 
        <div className='flex items-center gap-3' onClick={()=>close()}>
       <p className='group-hover:text-black text-gray-500 text-nowrap' > {nav.name}</p>
        {nav?.subs && 
       ( SubOpen === index ? <ArrowUp className='group-hover:text-black text-gray-500'/> :
        < ArrowDown className='group-hover:text-black text-gray-500' 
        
        />)
        }
        </div> 
        {nav.subs &&
        <div  className={`overflow-hidden  transition-[max-height] duration-[500ms] 
         md:absolute top-[80%]  left-0 bg-white md:shadow-ulShadow md:rounded-lg 
        ${SubOpen === index ?"max-h-[500px] ":"max-h-0" }`}>
            <ul className='md:mx-4 md:py-4 md:px-4 '>
                {nav.subs.map((sub:subType,i:number)=>{
                    return(<li key={i} className='max-sm:ml-5 flex items-center md:justify-start  gap-4 py-3  ' > 
                    {sub?.icon} 
                    <p className=' text-nowrap' > {sub.name}</p>
                     </li>)
                })}
            </ul>  
        </div>
        }  
        </li>
    )
}