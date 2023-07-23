import React, { useState } from 'react'
import LatestActivities from './LatestActivities';
import Online from './Online';
import Post from './Post'
import Suggestions from './Suggestions'

function Feed() {
  const [posts, setPosts]= useState([
    { 
      id:1,
      user: "warren_",
      userId:1,
      profilePic:'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "40min",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id:2,
      user: "johndoe",
      userId:2,
      profilePic:'https://images.unsplash.com/photo-1678734668635-3cfc30b6c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "2d",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id:3,
      user: "claire_",
      userId:3,
      profilePic:'https://images.unsplash.com/photo-1635442207643-073fac295f73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxwcm9maWxlJTIwcGhvdG9zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "6h",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id:4,
      user: "lexi",
      userId:4,
      profilePic:'https://images.unsplash.com/photo-1522196772883-393d879eb14d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      likes: 14,
      timestamp: "2h",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
  ]);


  return (
    <div className='feed flex flex-row ml-9'>
      <div className="feed__left w-2/3">
        <div className="feed__posts">
          {
            posts.map(post=>(<Post 
              key={post.id} 
              profilePic={post.profilePic} 
              user={post.user} 
              postImage = {post.postImage} 
              likes ={post.likes} 
              timestamp={post.timestamp} 
              userId = {post.userId}
              body = {post.body}
              />))
          }
        </div>
      </div>
      <div className="feed__right w-1/3">
        <Suggestions/>
        <LatestActivities/>
        <Online/>
      </div>
    </div>
  )
}

export default Feed