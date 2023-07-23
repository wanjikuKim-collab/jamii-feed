import React, { useState } from 'react'
import avatar1 from '../Assets/Images/people01.png'
import {FiMoreHorizontal} from 'react-icons/fi'
import {FaRegComment} from 'react-icons/fa'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {PiShareFatThin} from 'react-icons/pi'
import {BsBookmarks, BsBookmarksFill} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'

function Post({likes, body, timestamp, user, postImage, profilePic, userId}) {

  // truncating the description 
  const truncate =(string,n)=>{
    return string?.length > n ? string.substr(0,n-1) + '...': string
  }

  // icon color change temporary logic for like and bookmark
  const [like, setLiked] = useState(false)
  const [bookmark, setBookmark] = useState(false)

  return (
    <div className='post w-[550px] mt-8 mx-10 mb-14 '>
      {/* Header - user info */}
      <div className="post__header flex justify-between items-center mb-3">
        <div className="post__header__user flex items-center font-bold ">
          <img className='rounded-full mr-1 w-14 h-14 object-cover' src={profilePic} alt="avatar"/>
          <div className="details">
            <NavLink to={`/profile/${userId}`} className='name'>
              {user} 
            </NavLink>
            • <span className='date text-gray-500 text-sm'>{timestamp}</span>
          </div>
        </div>
        <FiMoreHorizontal/>
      </div>

      {/*Content*/}
      <div className="post__image">
        <img className='w-[100%] rounded-md border-[0.6px] border-[#80808084]' src={postImage} alt="" />
      </div>

      {/* Like, comment, share, bookmark */}
      <div className="post__footer">
        <div className="post__footerIcons flex justify-between mt-2 items-center hover:cursor-pointer text-2xl">
          <div className="post__footerIcons__main flex ">
            <button onClick={()=>setLiked(!like)}>
            {like ? <AiFillHeart className='mx-1'/> : <AiOutlineHeart className='mx-2'/>}
            </button>
            <FaRegComment className='mx-2'/>
            <PiShareFatThin className='mx-2'/>
          </div>
          <button className="post__footerIcons__save " onClick={()=>setBookmark(!bookmark)}>
            {bookmark ? <BsBookmarksFill/> : <BsBookmarks className='mx-1 hover:cursor-pointer'/>}
          </button>
        </div>
        Liked by <span className='font-semibold'>kimmy</span>  and <span className='font-semibold'>{likes}</span> others

        {/* description */}
        <div className="post__description flex gap-2 mt-2">
          <div className="post__header__user font-bold">          
            <NavLink to={`/profile/${userId}`} className='name'>
              {user} 
            </NavLink>
          </div>
          <p className='font-light'>{truncate(body,150)} <a href="" className='text-gray-600'>more</a></p>        
        </div>
      </div>

    

    </div>
  )
}

export default Post