import React from 'react'
import avatar1 from '../Assets/Images/people01.png'

function LatestActivities() {
  return (
    <div className='mt-10 mr-6 shadow shadow-blue-500/40 hover:shadow-indigo-500/40 p-6'>
        {/* Heading */}
        <h1 className="suggestions__title text-gray-500 font-bold">
            Latest Activities
        </h1>

        {/* user activity */}
        <div className="suggestions__userName flex justify-between mt-4">
          <div className="suggestion__userInfo flex items-center">
            <span className="avatar_icon">
              <img src={avatar1} alt="avatar" className='mr-2 w-10 object-cover'/>
            </span>
            <div className="userInfo flex flex-col">
              <span className="userName">kimmy</span>
              <span className="userRelation text-gray-500 text-sm">liked a post</span>
            </div>
          </div>
            <p className=' text-gray-500 text-sm'>1 min ago</p>
        </div>
        
    </div>
  )
}

export default LatestActivities