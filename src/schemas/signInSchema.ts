import { z } from "zod";

export const signInSchema = z.object({
  identifier: z.string(), // identifies == email
  password: z.string(),
});
