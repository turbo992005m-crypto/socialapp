import { createContext, useEffect, useState } from "react";
import { ApiServices } from "../services/API";

export const authcontext = createContext(null);

export default function AuthcontextProveier({ children }) {
  const [usertoken, setusertoken] = useState(localStorage.getItem("token"));
  const [isloading, setisloading] = useState(false);
  const [Userdata, setUserdata] = useState(null);
  useEffect(() => {
    if (usertoken != null) {
      ApiServices.setToken(usertoken);
      getLogeduserdata();
    }
  }, [usertoken]);

  async function getLogeduserdata() {
    setisloading(true);
    try {
      const data = await ApiServices.getLogeduserdata();
      setUserdata(data.data.user);
    } catch (error) {
      if (error.status == 401) {
        localStorage.removeItem("token");
        setusertoken(null);
      }
    } finally {
      setisloading(false);
    }
  }

  return (
    <authcontext.Provider
      value={{ usertoken, setusertoken, isloading, Userdata, setUserdata }}
    >
      {children}
    </authcontext.Provider>
  );
}
