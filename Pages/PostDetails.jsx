import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { authcontext } from '../Context/Authcontext'
import Post from '../components/Post/Post'
import { ApiServices } from '../services/API'
import Loading from '../components/Loading'


export default function Postetails() {
  let {postId} = useParams() 
      const [post,setpost]=useState(null)
      const [comments,setcomments] = useState([])

  async function getPostdetails(){
     const data = await ApiServices.getPostDetails(postId)
   setpost(data.data.post);

   
  } 

  async function getpostcomment(){
  const data = await ApiServices.getpostcomments(postId)
  setcomments(data.data.comments)

  
  }
  
  

    useEffect(()=>{ 
      getpostdetailsandcomment()
    },[])

    function getpostdetailsandcomment(){
      getPostdetails()
    getpostcomment() 

    }
  return (
    <div className=' max-w-2xl mx-auto  py-10 grid  gap-6 '>
      {post==null ?<Loading/>:
       <Post post={post} comments={comments} getPosts={getpostdetailsandcomment}/>
    
       
    
       
       }

    </div>
  )
}
