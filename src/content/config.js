import { defineCollection, z } from "astro:content";

const experiences = defineCollection({
    schema: z.object({
        companysname: z.string(),
        role: z.string(),
        startdate: z.date(),
        enddate: z.date().nullable(),
    })
});

export const collections = { experiences }