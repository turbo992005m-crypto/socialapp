import React, { useState } from "react";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Alert } from "@heroui/react";
import { schema } from "../Validation/SignupValidation";
import { Link, useNavigate } from "react-router-dom";
import { color } from "framer-motion";
import { addToast } from "@heroui/react";
import { ApiServices } from "../services/API";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [errmsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // const [name,setName] = useState("")
  // console.log(name);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "Ahmed Bahnasy",
      username: "Mahmoud999",
      password: "Mahmoud@123",
      email: "mahmoud999@gmail.com",
      gender: "male",
      dateOfBirth: "2000-01-01",
      rePassword: "Mahmoud@123",
    },
  });

  async function signUP(registerdata) {
    setIsLoading(true);
    setErrMsg("");
    try {
      const data = await ApiServices.signUp(registerdata);
      console.log(data);
      addToast({
        title: "sucess",
        description: "account created succesfly",
        color: "success",
      });
      navigate("/signin");
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

  // console.log(register('email').name);
  // console.log(register('email').onChange);
  // console.log(register('email').onBlur);
  // console.log(register('email').ref);

  return (
    <form onSubmit={handleSubmit(signUP)}>
      <div className="grid gap-4 text-center ">
        <h2>Join Us Today</h2>
        <p>create your account and start connecting</p>

        {/* <Input label="Full Name"  type="text"   variant="bordered" name={register('name').name}  onChange={register('name').onChange} onBlur={register('name').onBlur} ref={register('name').ref} /> */}

        <Input
          {...register("name")}
          {...getinputprops("Name", "text", errors.name)}
        />
        <Input
          {...register("username")}
          {...getinputprops("username", "text", errors.username)}
        />

        <Input
          {...register("email")}
          {...getinputprops("email", "email", errors.email)}
        />

        <Input
          {...register("password")}
          {...getinputprops("password", "password", errors.password)}
        />

        <Input
          {...register("rePassword")}
          {...getinputprops("confirm password", "password", errors.rePassword)}
        />

        <Input
          {...register("dateOfBirth")}
          {...getinputprops("Birthdate", "date", errors.dateOfBirth)}
        />

        {/* 
        <Select {...register("gender")} {...getinputprops("Gender",null, errors.gender)}>
          
          <SelectItem key="male">Male</SelectItem>
          <SelectItem key="female">Female</SelectItem>
        </Select> */}

        <Button
          isLoading={isLoading}
          type="submit"
          className="bg-transparent  border-2 border-gray-300 text-blue-700"
        >
          Sign Up
        </Button>
        <p>
          U have an account <Link to={"/signin"}>Login Now</Link>{" "}
        </p>

        <Link to={"/changepassword"}>are u forger password</Link>
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
