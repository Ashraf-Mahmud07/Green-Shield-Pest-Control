import { z } from "zod";

/** Shared field validators. */
const name = z.string().min(2, "Please enter your name");
const email = z.string().email("Please enter a valid email address");
const phone = z
  .string()
  .min(10, "Please enter a valid phone number")
  .regex(/^[\d\s()+-]+$/, "Please enter a valid phone number");
const message = z.string().min(10, "Please give us a few details (10+ characters)");

export const contactSchema = z.object({
  name,
  email,
  phone,
  subject: z.string().min(1, "Please choose a subject"),
  message,
});
export type ContactValues = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  name,
  email,
  phone,
  propertyType: z.string().min(1, "Please select a property type"),
  pest: z.string().min(1, "Please select the pest issue"),
  zip: z.string().regex(/^\d{5}$/, "Enter a 5-digit ZIP code"),
  details: z.string().optional(),
});
export type QuoteValues = z.infer<typeof quoteSchema>;

export const inspectionSchema = z.object({
  name,
  email,
  phone,
  address: z.string().min(5, "Please enter your street address"),
  preferredDate: z.string().min(1, "Please choose a preferred date"),
  timeWindow: z.string().min(1, "Please choose a time window"),
  concern: z.string().optional(),
});
export type InspectionValues = z.infer<typeof inspectionSchema>;

export const newsletterSchema = z.object({ email });
export type NewsletterValues = z.infer<typeof newsletterSchema>;

export const careerSchema = z.object({
  name,
  email,
  phone,
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience level"),
  coverNote: z.string().min(20, "Tell us a little about yourself (20+ characters)"),
});
export type CareerValues = z.infer<typeof careerSchema>;
