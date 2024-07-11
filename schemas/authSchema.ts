"use client"

import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string(),
    password : z.string()
});

export const RegisterSchema = z.object({
    firstname: z.string().max(50, {
        message: "First name is too big"
    }),
    lastname: z.string().max(50, {
        message: "Last name is too big"
    }),
    email: z.string(),
    password: z.string().min(7, {
        message: "password is too short"
    })
})