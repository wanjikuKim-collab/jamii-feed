import React from 'react'
import avatar1 from '../Assets/Images/people01.png'

function Online() {
  return (
    <div className='online mt-10 mr-6 shadow shadow-blue-500/40 hover:shadow-indigo-500/40 p-6'>
        {/* Heading */}
        <h1 className="suggestions__title text-gray-500 font-bold">
            Online Friends
        </h1>

        {/* user activity */}
        <div className="suggestions__userName flex justify-between mt-4">
          <div className="suggestion__userInfo relative flex items-center">
            <span className="avatar_icon">
              <img src={avatar1} alt="avatar" className='mr-2 w-10 object-cover'/>
            </span>
            <div className="userInfo flex flex-col">
                <div className='online_status w-2 h-2 rounded-full bg-lime-700 absolute top-0 left-8'/>
                <span className="userName">kimmy</span>
              {/* <span className="userRelation text-gray-500 text-sm">liked a post</span> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Online