import axios from "axios"

class APiServices{

    #token = localStorage.getItem("token")
   
     setToken(token){
        this.#token = token;
     }

  async  signIn(Logindata){
    const {data} = await axios.post( import.meta.env.VITE_BASE_URL + "/users/signin",Logindata)
    return data;
    }

    async signUp(registerdata){
    const {data} = await axios.post( import.meta.env.VITE_BASE_URL + "/users/signup",registerdata)
    return data;
    }
    async getPosts(){
        const {data} = await axios.get( import.meta.env.VITE_BASE_URL + "/posts",{
      headers:{
        token: this.#token
      }
    })
    return data;
    } 

    async getPostDetails(postId){
     const {data} = await axios.get( import.meta.env.VITE_BASE_URL + "/posts/" + postId,{
         headers:{
           token: this.#token
         }
       })
       return data;
    }

    async getpostcomments(postId){
      const {data} = await axios.get(import.meta.env.VITE_BASE_URL + `/posts/${postId}/comments`,{
        headers:{
            token: this.#token
        }
      })
      return data ;
    }

    async getLogeduserdata(){
        const {data} = await axios.get(import.meta.env.VITE_BASE_URL+"/users/profile-data",
            {
                headers:{
                    token:this.#token
                }
            }
        )
        return data;
    }
    async createPost(formData){
    const {data}= await axios.post(import.meta.env.VITE_BASE_URL+"/posts",formData,{
      headers:{
        token:this.#token
      }
    })
    return data
    }
    async createcomments(postId,formData){
      const {data} = await axios.post(import.meta.env.VITE_BASE_URL+"/posts/"+postId+"/comments",formData,{
        headers :{
          token: this.#token
        }
      })
      return data
    }
    async deletcomment(postId,commentid){
     const {data} = await axios.delete(import.meta.env.VITE_BASE_URL + "/posts/" + postId + "/comments/" + commentid,{
      headers:{
        token : this.#token
      }
     })
     return data;

    }
    async deletpost(postId){
     const {data} = await axios.delete(import.meta.env.VITE_BASE_URL + "/posts/" + postId,{
      headers:{
        token : this.#token
      }
     })
     return data;
    }
   
      async getmyprofile(){
          const {data} = await axios.get(import.meta.env.VITE_BASE_URL + "/users/profile-data",{
      headers:{
        token : this.#token
      }
     })
     return data;

      }
      async changepassword(formData){
           const {data} = await axios.patch(import.meta.env.VITE_BASE_URL + "/users/change-password",formData,{
      headers:{
        token : this.#token
      }
     })
     return data;

      }
}
export const ApiServices = new APiServices