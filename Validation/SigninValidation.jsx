
import * as zod from "zod"
import { regex} from "../regexjs/rejex"


  export const schema = zod.object({
  
    email: zod.string()
    .nonempty("email is required")
    .regex(regex.email,"enter valid email")
  ,
    password : zod.string()
    .nonempty("pass is required")
    .regex(regex.password,"Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character")
 

  })

