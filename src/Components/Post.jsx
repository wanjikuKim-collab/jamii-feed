import React from 'react'
import avatar1 from '../Assets/Images/people01.png'
import {FiMoreHorizontal} from 'react-icons/fi'
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {PiShareFatThin} from 'react-icons/pi'
import {BsBookmarks} from 'react-icons/bs'

function Post({likes, timestamp, user, postImage}) {
  return (
    <div className='post w-[550px] mt-8 mx-10 mb-14 '>
      {/* Header */}
      <div className="post__header flex justify-between items-center mb-3">
        <div className="post__header__user flex items-center font-bold ">
          <img src={avatar1} alt="avatar" className='mr-1 w-14'/>
          {user} • <span className='text-gray-500 text-sm'>{timestamp}</span>
        </div>
        <FiMoreHorizontal/>
      </div>

      {/* Post Image */}
      <div className="post__image">
        <img className='w-[100%] rounded-md border-[0.6px] border-[#80808084]' src={postImage} alt="" />
      </div>

      {/* Like, comment, share, bookmark */}
      <div className="post__footer">
        <div className="post__footerIcons flex justify-between mt-2 items-center hover:cursor-pointer text-2xl">
          <div className="post__footerIcons__main flex ">
            <AiOutlineHeart className='mx-2'/>
            <FaRegComment className='mx-2'/>
            <PiShareFatThin className='mx-2'/>
          </div>
          <div className="post__footerIcons__save ">
            <BsBookmarks className='mx-1 hover:cursor-pointer'/>
          </div>
        </div>
      </div>

      Liked by {likes} people

    </div>
  )
}

export default Post