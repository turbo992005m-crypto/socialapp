
import React, { useContext } from 'react'
import { authcontext } from '../../Context/Authcontext'

export default function PostHeader({ userPhoto,username,post,deletpost,creatorid }) {
 const {Userdata} = useContext(authcontext)
 
  return (
    <div className="flex pb-6 items-center justify-between">
      <div className="flex">
        <a className="inline-block mr-4" href="#">
          <img
            className="rounded-full object-cover w-12 h-12"
            src={userPhoto}
          />
        </a>

        <div className="flex flex-col">
          <div>
            <a className="inline-block text-lg font-bold dark:text-white" href="#">
              {username}
            </a>
          </div>

          <div className="text-slate-500 dark:text-slate-300">
            {post.createdAt}
          </div>
        </div>
      </div>
      {Userdata._id == creatorid &&  <button onClick={deletpost}>delete</button>}
    </div>
  )
}