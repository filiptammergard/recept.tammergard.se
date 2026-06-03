import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "zod"

const recipes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		minutes: z.number(),
		category: z.enum(["Huvudrätt", "Efterrätt", "Bröd", "Frukost", "Dryck"]),
		source: z.url().optional(),
	}),
})

export const collections = { recipes }
