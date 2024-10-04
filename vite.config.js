import { defineConfig } from "vite";

export default defineConfig({
  base: "/project/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        branding: "./service_branding.html",
        sign: "./service_signage.html",
        graphics: "./service_graphics.html",
        bags: "./service_bags.html",
        flags: "./service_flags.html",
        gifts: "./service_gifts.html",
        contact: "./contact.html",
      },
    },
  },
});
