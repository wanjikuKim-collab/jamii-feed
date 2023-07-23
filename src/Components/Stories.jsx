import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

function Stories() {
    const {currentUser} = useContext(AuthContext)
    // dummy data
    const stories = [
        {
          id: 1,
          name: "Kimmy",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 2,
          name: "Warren",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 3,
          name: "Claire",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 4,
          name: "Morty",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
      ];
  return (
    <div className='stories flex gap-4 mt-5 h-64 ml-9  mb-10'>
        <div className="story relative flex-1 rounded-xl overflow-hidden">
            <img className='w-[100%] h-[100%] object-cover' src={currentUser.profilePic} alt="" />
            <span className='absolute bottom-3 left-4 font-bold'>{currentUser.name}</span>
            <button className="add absolute bottom-10 left-4 bg-[#0095F7] w-8 h-8 text-2xl flex justify-center font-semibold cursor-pointer border-none rounded-full "> + </button>
        </div>
        {
            stories.map(story=>(
                <div key={story.id} className="story relative flex-1 rounded-xl overflow-hidden">
                    <img className='w-[100%] h-[100%] object-cover' src={story.img} alt="" />
                    <span className='absolute bottom-3 left-4 font-bold'>{story.name}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Stories