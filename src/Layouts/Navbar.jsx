import React, { useContext, useState } from 'react'
import profile_img from '../Assets/Images/Profile_Picture.png'
import { NavLink} from 'react-router-dom'
import {BsArrowLeftShort, BsChevronDown, BsSearch} from 'react-icons/bs'
import {AiFillHome, AiOutlineMessage} from 'react-icons/ai'
import {RiFolderAddLine} from 'react-icons/ri'
import {MdOutlineExplore, MdOutlineNotifications} from 'react-icons/md'
import { RiLoginCircleLine} from 'react-icons/ri'
import { AuthContext } from '../Context/AuthContext'



function Navbar() {
  const sideMenuLink = [
        {name:'Home', link: '/home', icon: <AiFillHome/> },
        {name:'Create', link: '/create', icon:<RiFolderAddLine/> },
        {name:'Explore', link: '/explore', icon:<MdOutlineExplore/> },
        {name:'Messages', link: '/messages', icon:<AiOutlineMessage/> },
        {name:'Notifications', link: '/notifications', icon:<MdOutlineNotifications/> },
    ]
    
    const {currentUser} = useContext(AuthContext);


    const [active, setActive] = useState("Dashboard");
    const [open, setOpen] = useState(true)
    const [submenuOpen, setSubmenuOpen] = useState(false)

  return (
    <div className={`flex flex-col duration-300 ${open? "w-52" : "w-20"} sticky top-0`}>
        <BsArrowLeftShort className={`font-bold text-blue text-3xl rounded-full absolute -right-3 top-9 border border-blue cursor-pointer ${!open && 'rotate-180'}`}
        onClick={()=> setOpen(!open)}/>
        <h1 className='logo pl-3 mt-3 py-4 font-extrabold text-3xl'>Jamii <span className='logo text-orange-700'>Feed</span></h1>

        <div className={`flex items-center mt-6 px-4 py-2 rounded-md `}>
            <BsSearch className={` text-lg block float-left cursor-pointer`}/>
            <input type={'search'} placeholder='Search' className={` ${!open && 'hidden'} duration-300 text-base bg-transparent w-full text-white focus:outline-none ml-2`}/>
        </div>
        <ul
        className='flex flex-col list-none'
        data-te-sidenav-menu-ref>
        {
            sideMenuLink.map((links)=>(
                <>
                    <li
                    key={links.name}
                    onClick ={()=> setActive(links.name)}
                    className={`flex items-center cursor-pointer border-grey-light ease-linear ${links.spacing && submenuOpen ? ' border-none': 'mt-2'} hover:text-blue pt-4`}
                    >
                        <NavLink
                        to={links.link}
                        className={`flex pl-3 font-bold cursor-pointer items-center truncate text-lg`}
                        >
                            <span className={`pr-2`}>{links.icon}</span>
                            <span className={`${!open && "hidden"} duration-300 pr-12`}>{links.name}</span>
                            {links.submenu && (
                                <BsChevronDown className='' onClick={()=> setSubmenuOpen(!submenuOpen)}/>
                            )}
                        </NavLink>
                    </li>
                </>

            ))
        }
            <li className={`mt-4  hover:bg-grey-light pl-1`}>
                <button href="/login" className="flex items-center font-bold cursor-pointer text-lg p-2 active text-white no-underline  hover:text-blue-dark">
                    <span className={`pr-2 text-xl`}> <RiLoginCircleLine/></span>
                    <span className={`${!open && "hidden"} hover:text-blue-dark duration-300`}> Login</span>

                </button>
            </li>
            <div className='last:mt-6 flex items-center py-4 outline-none font-extrabold text-lg '>
                <img  className='rounded-full mr-1 w-14 h-14 object-cover' src={currentUser.profilePic} alt='default profile piture'/>
                <h1 className={`origin-left duration-300 ${!open && "scale-0"}`}>{currentUser.name}</h1>
            </div>

        </ul>
    </div>
  )
}

export default Navbar