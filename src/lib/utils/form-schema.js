import { z } from "zod";

const phoneRegex = new RegExp(
  /^\+?[1-9]\d{1,14}$/
);

export const formSchema = z.object({
  email: z.email("Invalid email").nonempty("Email is required"),
  fname: z.string().nonempty("First name is required"),
  lname: z.string().nonempty("Last name is required"),
  tel: z.e164("Incorrect phone format").nonempty("Phone number is required"),
});


