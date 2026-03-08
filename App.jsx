import { useState } from "react";
import { HeroUIProvider } from "@heroui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./Pages/Feed";
import Notfound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Postdetails from "./Pages/PostDetails";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import ProtectedRotueAuthantication from "./ProtectedRoute/ProtectedRotueAuthantication";
import { ToastProvider } from "@heroui/react";
import AuthcontextProveier from "./Context/Authcontext";
import Changepassword from "./Pages/changepassword";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "posts/:postId",
          element: (
            <ProtectedRoute>
              <Postdetails />
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <Notfound /> },
      ],
    },
    {
      path: "",
      element: <AuthLayout />,
      children: [
        {
          path: "changepassword",
          element: (
            <ProtectedRotueAuthantication>
              <Changepassword />
            </ProtectedRotueAuthantication>
          ),
        },

        {
          path: "signin",
          element: (
            <ProtectedRotueAuthantication>
              <SignIn />
            </ProtectedRotueAuthantication>
          ),
        },
        {
          path: "signup",
          element: (
            <ProtectedRotueAuthantication>
              <SignUp />{" "}
            </ProtectedRotueAuthantication>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <AuthcontextProveier>
        <HeroUIProvider>
          <ToastProvider />
          <RouterProvider router={router} />
        </HeroUIProvider>
      </AuthcontextProveier>
    </>
  );
}
