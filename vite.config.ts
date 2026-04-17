import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const fileEnv = loadEnv(mode, process.cwd(), "");
  const webhookUrl =
    fileEnv.WEBHOOK_URL ||
    fileEnv.VITE_WEBHOOK_URL ||
    process.env.WEBHOOK_URL ||
    process.env.VITE_WEBHOOK_URL ||
    "";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "import.meta.env.WEBHOOK_URL": JSON.stringify(webhookUrl),
    },
    build: {
      outDir: "dist",
      sourcemap: false,
      minify: "esbuild",
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            ui: ["@radix-ui/react-accordion", "@radix-ui/react-alert-dialog", "@radix-ui/react-avatar"],
          },
        },
      },
    },
    preview: {
      port: 8080,
      host: "::",
    },
  };
});
