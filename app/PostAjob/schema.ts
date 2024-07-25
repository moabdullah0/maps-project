import { z } from "zod";

export const stepOneSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    category: z.string().min(1, { message: "Category is required" }),
    subcategory: z.string().min(1, { message: "Subcategory is required" }),
    country: z.string().optional(),
    language: z.array(z.object({
      value: z.string(),
      label: z.string()
    })).min(1, { message: "At least one language is required" }),
  });
  
  export type StepOneFormData = z.infer<typeof stepOneSchema>;

  export const stepTwoSchema = z.object({
    description: z.string().min(1, { message: "Description is required" }),
    skills: z.array(z.object({
      value: z.string(),
      label: z.string()
    })).min(1, { message: "At least one skill is required" }),
  });
  
  export type StepTwoFormData = z.infer<typeof stepTwoSchema>;


  export const stepThreeSchema = z.object({
    jobType: z.string().min(1, { message: "Job Type is required" }),
    from:  z.preprocess((val) => {
        if (typeof val === "string") return parseFloat(val);
        return val;
      }, z.number().positive({ message: "Number of students must be a positive number" })),
    to:  z.preprocess((val) => {
        if (typeof val === "string") return parseFloat(val);
        return val;
      }, z.number().positive({ message: "Number of students must be a positive number" })),
    deadline: z.string().optional(),
  });
  
  export type StepThreeFormData = z.infer<typeof stepThreeSchema>;
  

  export const stepFourSchema = z.object({
    jobAudience: z.enum(['Public', 'Invite freelancer']),
    Invite: z.array(z.object({
        value: z.string(),
        label: z.string()
      })).min(1, { message: "At least one skill is required" }),
  });
  
  export type StepFourFormData = z.infer<typeof stepFourSchema>;