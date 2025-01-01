"use server";

import { getErrorMessage, validateString } from "@/lib/Utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";
import { renderAsync } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
    const senderName = formData.get("senderName");
    const senderPhone = formData.get("senderPhone");
    const service = formData.get("service");
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender Email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }
    if (!validateString(senderName, 50)) {
        return {
            error: "Invalid Name",
        };
    }
    if (!validateString(service, 5000)) {
        return {
            error: "Invalid Subject",
        };
    }
    if (!validateString(senderPhone, 20)) {
        return {
            error: "Invalid Phone",
        };
    }

    let data;

    const html = await renderAsync(
        React.createElement(ContactFormEmail, {
            message: message,
            senderEmail: senderEmail,
            senderName: senderName,
            senderPhone: senderPhone,
            service: service
        })
    );

    try {
        data = await resend.emails.send({
            from: "TheCleaners <onboarding@resend.dev>",
            to: "sameerrifat0@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail,
            html: html,
        });
    } catch (error) {
        console.log('server error: ', error);
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};
