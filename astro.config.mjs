import preact from "@astrojs/preact"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), sitemap()],
})
