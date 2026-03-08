import React from 'react'
import { Navigate } from 'react-router-dom'
import { authcontext } from '../Context/Authcontext'
import { useContext } from 'react'
export default function ProtectedRotueAuthantication({children}) {

  const {usertoken} = useContext(authcontext)
         const IsLogin = !!usertoken
  return (
     <>
    {IsLogin ?  <Navigate to={"/"} /> : children}
    </>
    )
}
