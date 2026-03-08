// import  { useContext, useEffect,useState } from 'react'
// import axios from 'axios'
// import { authcontext } from '../Context/Authcontext'
// import Post from '../components/Post'

// export default function Feed() {

//   // const { counter, setcounter } = useContext(countercontext);

//   // function increase(){
//   //   localStorage.setItem("counter",counter+1)
//   //   setcounter(counter=> counter + 1);
//  // }
//     const {usertoken} = useContext(authcontext)

//     const [posts, setPosts] = useState([])

//   async function getPosts(){
//     const {data} = await axios.get("https://route-posts.routemisr.com/posts",{
//       headers:{
//         token: usertoken
//       }
//     })
//    setPosts(data.data.posts)

//   }
//     useEffect(()=>{getPosts()},[])

//   return (

//     <div className=' max-w-xl mx-auto  py-10 grid  gap-6 '>

//       {
//       posts.map((post)=>{
//         return  <Post post={post} commentlimite={2}/>

//       })

//       }

//     </div>
//   )
// }

import { useContext, useEffect, useState } from "react";
// import { countercontext} from '../Context/CounterContext'
// import axios from 'axios'
// import { authcontext } from '../Context/Authcontext'
import Post from "../components/Post/Post";
import { ApiServices } from "../services/API";
import Loading from "../components/Loading";
import CreatePost from "../components/Post/CreatePost";

export default function Feed() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  async function getPosts() {
    const data = await ApiServices.getPosts();
    setPosts(data.data.posts);
    setLoading(false);
  }
  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" max-w-xl mx-auto  py-10 grid  gap-6 ">
      <CreatePost getPosts={getPosts}></CreatePost>
      {posts.map((post) => (
        <Post key={post._id} post={post} getPosts={getPosts} />
      ))}
    </div>
  );
}
