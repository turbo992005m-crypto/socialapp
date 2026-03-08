
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
import CreateCommentInput from '../Comments/CreateCommentInput'
import Comment from '../Comments/Comment'
import Showmorebtn from '../Showmorebtn'
import { ApiServices } from '../../services/API'


export default function Post({post,comments,getPosts}) {

   async function deletcomment(commentId){
    const response = await ApiServices.deletcomment(post._id,commentId)
    if (response.success){
      getPosts()
    }
  }

  async function deletpost(){
    const response = await ApiServices.deletpost(post._id)
    if (response.success){
      getPosts()
    }
  }
  async function addcomment(formData){
   const response = await ApiServices.createcomments(post._id,formData)
   if (response.success){
    getPosts()
   }
   
  }
  return (
   <article className="mb-4 break-inside p-6 rounded-xl  shadow-2xl bg-gray-100 dark:bg-slate-800 flex flex-col bg-clip-border w-full">
   <PostHeader username={post.user.name} userPhoto={post.user.photo} deletpost={deletpost} creatorid={post.user._id} post={post} />
<PostBody body={post.body} image={post.image} />
<PostFooter
  likesCount={post.likesCount}
  commentsCount={post.commentsCount}
/>  
  <CreateCommentInput addcomment={addcomment}/>
  <div className="pt-6">
   {
         comments ? comments.map((comment)=>(<Comment key={comment._id} comment={comment} post={post} deletcomment={deletcomment} postcreatorid={post.user._id}/> ))
         :
         post.topComment && <Comment comment={post.topComment} deletcomment={deletcomment} postcreatorid={post.user._id}/>
   }
   </div>
  {!comments && <Showmorebtn postId={post._id}/>}
  
</article>)
}
