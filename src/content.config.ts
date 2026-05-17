import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const recipes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		minutes: z.number(),
		category: z.enum(["Huvudrätt", "Efterrätt", "Bröd", "Frukost", "Dryck"]),
		source: z.string().url().optional(),
	}),
})

export const collections = { recipes }
