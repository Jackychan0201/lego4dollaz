import { z } from "zod";

export const formSchema = z.object({
  email: z.email("Invalid email").nonempty("Email is required"),
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  tel: z.e164("Incorrect phone format").nonempty("Phone number is required"),
});


