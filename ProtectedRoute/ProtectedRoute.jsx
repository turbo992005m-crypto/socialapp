
import { Navigate } from 'react-router-dom'
import { authcontext } from '../Context/Authcontext'
import { useContext } from 'react'
export default function ProtectedRoute({children}) {
  const {usertoken} = useContext(authcontext)
       const IsLogin = !!usertoken
  return (
     <>
    {IsLogin ? children : <Navigate to={"/signin"}/> }
    </>
  )
}
