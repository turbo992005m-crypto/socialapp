import React, { useContext, useState } from "react";
import { Button, Input, Alert } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authcontext } from "../Context/Authcontext";
import { ApiServices } from "../services/API";
import { z } from "zod";
import { schema } from "../Validation/SigninValidation";

export default function Changepassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [errmsg, setErrMsg] = useState("");
  const [successmsg, setSuccessMsg] = useState("");
  const { setusertoken } = useContext(authcontext);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      newPassword: "",
    },
  });

  async function changepassword(formData) {
    setIsLoading(true);
    setErrMsg("");
    setSuccessMsg("");
    try {
      const data = await ApiServices.changepassword(formData);

      if (data.data.token) {
        localStorage.token = data.data.token;
        setusertoken(data.data.token);
      }

      setSuccessMsg("Password changed successfully!");
      reset();
    } catch (error) {
      if (error.response) setErrMsg(error.response.data.error);
      else setErrMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(changepassword)}>
      <div className="grid gap-4 text-center">
        <h2 className="font-bold">Change Password</h2>
        <p>Enter your current password and choose a new one</p>

        <Input
          classNames={{ inputWrapper: "bg-gray-200" }}
          {...register("password")}
          placeholder="Current Password"
          type="password"
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
        />

        <Input
          classNames={{ inputWrapper: "bg-gray-200" }}
          {...register("newPassword")}
          placeholder="New Password"
          type="password"
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
        />

        <Button
          isLoading={isLoading}
          type="submit"
          className="from-gray-700 bg-linear-90 to-gray-300 border-1 border-gray-300 text-white"
        >
          Change Password
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

        {successmsg && (
          <Alert
            hideIcon
            color="success"
            title={successmsg}
            variant="faded"
            classNames={{ base: "py-0 text-center" }}
          />
        )}
      </div>
    </form>
  );
}
