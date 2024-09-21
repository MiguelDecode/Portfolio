import { defineCollection, z } from "astro:content";
// z => zod schema

const projects = defineCollection({
    schema: z.object({
        name: z.string(),
        image: z.string(),
        highlights: z.array(z.string()),
        repo: z.string(),
        live: z.string(),
        stack: z.array(z.string())
    })
})

export const collections = { projects }

