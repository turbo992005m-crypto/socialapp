
import * as zod from "zod"
import { regex } from "../regexjs/rejex"
import { getAge } from "../regexjs/calcages"
  export const schema = zod.object({
    name : zod.string()
    .nonempty("name is required")
    .min(2,"name must be at least 2 char")
    .max(50,"name must be at most 50 char")
    ,
     username : zod.string()
    .nonempty("username is required"),

    email: zod.string()
    .nonempty("email is required")
    .regex(regex.email,"enter valid email")
  ,
    password : zod.string()
    .nonempty("pass is required")
    .regex(regex.password,"Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character")
  ,
    rePassword : zod.string()
    .nonempty("repass is required")
    
    
    ,
    dateOfBirth:zod.string()
    .nonempty("birthdate is empty")
    .refine((date)=> getAge(date)>=18,"have no access")
    ,
    gender : zod.string()
    .nonempty("gender is required")
    .regex(/^(male|female)$/,"gender must be male or female")

  }).refine((data)=> data.password == data.rePassword, {message:"must match",path:["repassword"]})

