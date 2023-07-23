import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';

function Comments() {
    const { currentUser } = useContext(AuthContext);
  //dummy data
  const comments = [
    {
      id: 1,
      body: "Love that outfit",
      user: "warren_",
      userId: 1,
      profilePicture:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      user: "johndoe",
      userId: 2,
      profilePicture:
        "https://images.unsplash.com/photo-1678734668635-3cfc30b6c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className='comments'>
        {/* <h1 className='flex justify-center mt-5'>Comments:</h1> */}

        <div className="comment__type flex w-full gap-5 items-center mt-10 mb-5">
            <img src={currentUser.profilePic} alt="" className='comment__img rounded-full w-10 h-8 object-cover'/>
            <input className='rounded border-0 bg-white px-3 w-full h-10 text-black' type="text" placeholder='Add a comment...' />
            <button className="comment__submit rounded p-2 text-white lg:text-md font-bold bottom-0 hover:bg-orange-400 bg-orange-700"> submit</button>
         
        </div>
        
        {
            comments.map(comment=>(
                <div className="comment flex items-center mb-4 mt-2">
                    <img src={comment.profilePicture} alt="" className='comment__img rounded-full mr-2 w-8 h-8 object-cover'/>
                    <div className="comment__info">
                        <span className='font-bold'>{comment.user}<span className='comment__timestamp ml-2 text-slate-500 font-normal'> 1 min ago</span></span>
                        <p className='font-thin'>{comment.body}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Comments