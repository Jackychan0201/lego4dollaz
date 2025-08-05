import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from "zod";

export const formSchema = z.object({
  email: z.email("Invalid email").nonempty("Email is required"),
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  tel: z.string()
    .nonempty("Phone number is required")
    .refine(isValidPhoneNumber, { message: "Incorrect phone format" }),
});


