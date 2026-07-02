"use server";
import { Resend } from "resend";
import { WHContactEmail } from "@/emails/WHContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: { name: string; email: string; subject: string; message: string }) {
  try {
    const result = await resend.emails.send({
      from: "Web WH <onboarding@resend.dev>", // Cambia esto por tu dominio cuando lo verifiques en Resend
      to: ["whmattress.a01@gmail.com"], // AQUÍ pones tu correo personal/empresa
      subject: `Nuevo mensaje: ${data.subject}`,
      react: WHContactEmail(data),
    });
    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { success: false };
  }
}  