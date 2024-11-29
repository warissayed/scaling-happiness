import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().length(6, { message: "Code must be 6 digits" }),
  email: z.string({ required_error: "Email is required" }).email(),

  // body: z.object({
  //     email: z.string({required_error: "Email is required"}).email(),
  //     otp: z.string({required_error: "OTP is required"}).length(6, {message: "OTP must be 6 digits"}),
  // })
});
