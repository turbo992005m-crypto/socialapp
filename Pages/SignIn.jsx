import React, { useContext, useState } from "react";
import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Alert } from "@heroui/react";
import { schema } from "../Validation/SigninValidation";
import { Link } from "react-router-dom";
import { authcontext } from "../Context/Authcontext";
import { ApiServices } from "../Services/API";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [errmsg, setErrMsg] = useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const { setusertoken } = useContext(authcontext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "Bahnasy@123",
      email: "ahmedbahnasy@gmail.com",
    },
  });
  async function signin(Logindata) {
    setIsLoading(true);
    setErrMsg("");
    try {
      const data = await ApiServices.signIn(Logindata);
      localStorage.token = data.data.token;
      setusertoken(data.data.token);
    } catch (error) {
      if (error.response) {
        setErrMsg(error.response.data.errors);
      } else {
        setErrMsg(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }
  function getinputprops(label, type, field) {
    return {
      label,
      type,
      variant: "bordered",
      isInvalid: !!field,
      errorMessage: field?.message,
    };
  }

  return (
    <form onSubmit={handleSubmit(signin)}>
      <div className="grid gap-4 text-center ">
        <h2 className=" font-bold ">Login</h2>
        <p>
          Don't have an account?{" "}
          <Link className=" text-blue-700 font-extralight" to={"/signup"}>
            Sign up
          </Link>
        </p>
        <div className=" py-2 after:content-[''] after:absolute after:w-1/4 after:h-0.5 after:bg-linear-to-r after:from-transparent after:via-gray-400 to-transparent after:top-4.5 after:right-2 relative before:content-[''] before:absolute before:w-1/4 before:h-0.5 before:bg-linear-to-r before:from-transparent before:via-gray-400 before:to-transparent before:top-4.5 before:left-2 ">
          <p className=" text-sm text-gray-500 font-extralight">
            or continue with email
          </p>
        </div>
        <Input
          classNames={{ inputWrapper: " bg-gray-200" }}
          {...register("email")}
          placeholder="name@example.com"
          {...getinputprops("email", "email", errors.email)}
        />
        <Input
          classNames={{ inputWrapper: " bg-gray-200" }}
          {...register("password")}
          placeholder="Create a strong password"
          {...getinputprops("password", "password", errors.password)}
        />
        <Button
          isLoading={isLoading}
          type="submit"
          className=" from-gray-700 bg-linear-90 to-gray-300  border-1 border-gray-300 text-white"
        >
          Sign in
        </Button>

        {errmsg && (
          <Alert
            hideIcon
            color="danger"
            title={errmsg}
            variant="faded"
            classNames={{ base: "py-0 text-center" }}
          />
        )}
      </div>
    </form>
  );
}
