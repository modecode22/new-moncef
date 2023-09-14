import { z } from "zod";

export const formDataSchema = z.object({
  name: z
    .string()
    .min(3, { message: "name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(8, { message: "message must be at least 8 characters long" }),
});

export type FormData = z.infer<typeof formDataSchema>;
