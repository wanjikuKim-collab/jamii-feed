import React from 'react'
import avatar1 from '../Assets/Images/people01.png'

function Suggestions() {
  return (
    <div className='suggestions mt-10 mr-6 shadow shadow-blue-500/40 hover:shadow-indigo-500/40 p-6'>
      {/* Heading */}
      <h1 className="suggestions__title text-gray-500 font-bold">
        Suggestions for you
      </h1>
      
      {/* Suggestions */}
      <div className="suggestions__userNames">
        <div className="suggestions__userName flex justify-between mt-4">
          <div className="suggestion__userInfo flex items-center">
            <span className="avatar_icon">
              <img src={avatar1} alt="avatar" className='mr-2 w-10 object-cover'/>
            </span>
            <div className="userInfo flex flex-col">
              <span className="userName">kimmy</span>
              <span className="userRelation text-gray-500 text-sm">New to Instagram</span>
            </div>
          </div>
            <button className="follow text-[#0095F7] font-bold bg-transparent border-0 hover:text-white cursor-pointer">Follow</button>
        </div>

        <div className="suggestions__userName flex justify-between mt-4">
          <div className="suggestion__userInfo flex items-center">
            <span className="avatar_icon">
              <img src={avatar1} alt="avatar" className='mr-2 w-10 object-cover'/>
            </span>
            <div className="userInfo flex flex-col">
              <span className="userName">kimmy</span>
              <span className="userRelation text-gray-500 text-sm">New to Instagram</span>
            </div>
          </div>
            <button className="follow text-[#0095F7] font-bold bg-transparent border-0 hover:text-white cursor-pointer">Follow</button>
        </div>

        <div className="suggestions__userName flex justify-between mt-4">
          <div className="suggestion__userInfo flex items-center">
            <span className="avatar_icon">
              <img src={avatar1} alt="avatar" className='mr-2 w-10 object-cover'/>
            </span> 
            <div className="userInfo flex flex-col">
              <span className="userName font-semibold text-sm">kimmy</span>
              <span className="userRelation text-gray-500 text-sm ">New to Instagram</span>
            </div>
          </div>
            <button className="follow text-[#0095F7] font-bold bg-transparent border-0 hover:text-white cursor-pointer">Follow</button>
        </div>
      </div>
   
      
    </div>
  )
}

export default Suggestions