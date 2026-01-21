"use server";

import { z } from "zod";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  location: z.string().min(2, "Please enter a location"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactSchema.parse(formData);

    // Send email using Resend (if API key is configured)
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: "ESLAH Website <onboarding@resend.dev>",
          to: [process.env.CONTACT_EMAIL],
          replyTo: validatedData.email,
          subject: `New Contact Form: ${validatedData.projectType}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
            <p><strong>Location:</strong> ${validatedData.location}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
          `,
        });

        console.log("✅ Email sent successfully via Resend");
      } catch (emailError) {
        console.error("⚠️ Failed to send email via Resend:", emailError);
        // Continue even if email fails - we still want to log the submission
      }
    } else {
      console.log("⚠️ Resend not configured. Add RESEND_API_KEY and CONTACT_EMAIL to .env.local");
    }

    // Log submission for debugging
    console.log("📩 Form submission received:", {
      name: validatedData.name,
      email: validatedData.email,
      projectType: validatedData.projectType,
      location: validatedData.location,
    });

    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed",
        errors: error.issues.reduce((acc, err) => {
          const field = err.path[0] as string;
          acc[field] = err.message;
          return acc;
        }, {} as Record<string, string>),
      };
    }

    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
