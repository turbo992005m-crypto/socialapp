import React from 'react';

export default function Header() {
  return (
    <div className="relative h-screen w-full bg-[url(../src/assets/social.png)] bg-no-repeat bg-cover bg-center">
      
      {/* 🔵 طبقة البلور والخلفية فقط */}
      <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-md"></div>

      {/* ⭐ المحتوى فوق البلور */}
      <div className="relative z-10 p-10 h-full">
        <div className="flex items-center">
          
          {/* المربع */}
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex justify-center items-center">
            <h1 className="leading-none m-0 text-white">S</h1>
          </div>

          {/* النص */}
          <h1 className="ml-3 text-white">SocialHub</h1>

        </div>
                 {/* welcome */}
        <div className=" pt-20">
        <span className='text-6xl font-medium text-white'>Welcome Back</span>
        <span className='text-6xl font-medium block h-20 bg-linear-60 from-blue-300 to-blue-200 bg-clip-text text-transparent  '>to SocialHub App</span>
        <p className='text-white pl-1'>Signin to connect people all over the world</p>
        <div className="grid gap-4 pt-5">
                 {/* components */}
                 
           <div className="w-1/1  flex p-3 gap-3   backdrop-blur-md outline-2 outline-amber-50/10 rounded-xl ">
           <div className="w-12 h-12 bg-green-100/20 rounded-2xl flex justify-center items-center">
           <i class="fa-solid  text-green-600/40 fa-message fa-lg"></i>            
            
          </div>
          <div className="flex flex-col ">
            <p className="  text-white text-md font-light mb-1">Real-time chat</p>
            <p className=" text-white font-light">Instant messaging</p>
          </div>

          </div>

             <div className="w-1/1  flex p-3 gap-3   backdrop-blur-md outline-2 outline-amber-50/10 rounded-xl ">
           <div className="w-12 h-12 bg-indigo-400/15 rounded-2xl flex justify-center items-center">

           <i class="text-indigo-300/40 fa-regular fa-image fa-lg "></i>
            
          </div>
          <div className="flex flex-col ">
            <p className="  text-white text-md font-light  mb-1">Share Media</p>
            <p className=" text-white font-light">Photos & videos</p>
          </div>

          </div>

             <div className="w-1/1  flex p-3 gap-3   backdrop-blur-md outline-2 outline-amber-50/10 rounded-xl ">
           <div className="w-12 h-12 bg-red-900/10 rounded-2xl flex justify-center items-center">
            <i class=" text-red-300/40 fa-solid  fa-bell fa-md"></i>
            
          </div>
          <div className="flex flex-col ">
            <p className="  text-white text-md font-light  mb-1">Smart Alerts</p>
            <p className=" text-white font-light">Stay updated</p>
          </div>

          </div>

             <div className="w-1/1  flex p-3 gap-3   backdrop-blur-md outline-2 outline-amber-50/10 rounded-xl ">
           <div className="w-12 h-12 bg-green-300/20 rounded-2xl flex justify-center items-center">
            <i class=" text-green-300/40 fa-solid  fa-users fa-md"></i>
            
          </div>
          <div className="flex flex-col ">
            <p className="  text-white text-md font-light mb-1">Communities</p>
            <p className=" text-white font-light">Find your tribe</p>
          </div>

          </div>
          
                          {/* information */}
         
         
         </div>
            <div className="flex justify-between px-4 pt-2">
              <div className="">
          <div className="contain gap-2 flex pt-6 ">
            
            <i class="mt-3 text-white fa-solid  fa-users fa-md"></i>
            
            <div className=" flex justify-center items-center"><span className=' text-3xl font-semibold text-white'>2M+</span></div>
          </div>
         <p className='  text-md font-sm text-white'>Active Users</p>

          </div>
        
        
       <div className="">
        <div className="contain gap-2 flex pt-6 ">
            
            <i class="mt-5 text-white fa-solid  fa-heart fa-lg"></i>
            
            <div className=" flex justify-center items-center"><span className=' text-3xl font-semibold text-white'>10M+</span></div>
          </div>
         <p className=' pl-2 text-md font-sm text-white'>Posts Shared</p>
       
       </div>

        
       <div className="">
        <div className="contain gap-2 flex pt-6 ">
            
           <i class="fa-solid mt-5 text-white fa-message fa-lg"></i>            
            <div className=" flex justify-center items-center"><span className=' text-3xl font-semibold text-white'>50M+</span></div>
          </div>
         <p className=' pl-1.5 text-md font-sm text-white'>Message Sent</p>
       
       </div>
       
        </div>

        


        </div>

        
      </div>

    </div>
  );
}