"use client";

import * as z from 'zod';

export const ResumeSchema = z.object({
    resumeName: z.string(),
    githubLink: z.string().startsWith('https://github.com/' || 'github.com/' || 'http://github.com/', {
        message: "Provide a valid github URL"
    }),
    linkedinLink: z.string().startsWith('https://www.linkedin.com/' || 'linkedin.com' || 'http://www.linkedin.com/', {
        message: "Provide a valid Linkedin URL"
    })
});