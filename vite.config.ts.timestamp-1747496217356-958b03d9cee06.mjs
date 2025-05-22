// vite.config.ts
import { defineConfig } from "file:///C:/Desarrollo/Proyectos/tellevo/web/landing%20antiguo/landing/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///C:/Desarrollo/Proyectos/tellevo/web/landing%20antiguo/landing/node_modules/@builder.io/qwik/dist/optimizer.mjs";
import { qwikCity } from "file:///C:/Desarrollo/Proyectos/tellevo/web/landing%20antiguo/landing/node_modules/@builder.io/qwik-city/lib/vite/index.mjs";
import tsconfigPaths from "file:///C:/Desarrollo/Proyectos/tellevo/web/landing%20antiguo/landing/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "my-qwik-empty-starter",
  description: "Blank project with routing included",
  engines: {
    node: "^18.17.0 || ^20.3.0 || >=21.0.0"
  },
  "engines-annotation": "Mostly required by sharp which needs a Node-API v9 compatible runtime",
  private: true,
  type: "module",
  scripts: {
    build: "qwik build",
    "build.client": "vite build",
    "build.preview": "vite build --ssr src/entry.preview.tsx",
    "build.server": "vite build -c adapters/cloudflare-pages/vite.config.ts",
    "build.types": "tsc --incremental --noEmit",
    deploy: "wrangler pages deploy ./dist",
    dev: "vite --mode ssr",
    "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force",
    fmt: "prettier --write .",
    "fmt.check": "prettier --check .",
    lint: 'eslint "src/**/*.ts*"',
    preview: "qwik build preview && vite preview --open",
    serve: "wrangler pages dev ./dist --compatibility-flags=nodejs_als",
    start: "vite --open --mode ssr",
    qwik: "qwik"
  },
  devDependencies: {
    "@builder.io/qwik": "^1.12.1",
    "@builder.io/qwik-city": "^1.12.1",
    "@fortawesome/fontawesome-free": "^6.7.2",
    "@qwik-ui/headless": "^0.6.5",
    "@types/eslint": "8.56.10",
    "@types/google.maps": "^3.58.1",
    "@types/node": "20.14.11",
    "@typescript-eslint/eslint-plugin": "7.16.1",
    "@typescript-eslint/parser": "7.16.1",
    autoprefixer: "^10.4.14",
    eslint: "8.57.0",
    "eslint-plugin-qwik": "^1.12.1",
    "flowbite-qwik": "^0.38.3",
    "flowbite-qwik-icons": "^0.1.9",
    postcss: "^8.4.31",
    prettier: "3.3.3",
    "qwik-icons": "^0.0.1",
    tailwindcss: "^3.3.3",
    typescript: "5.4.5",
    undici: "*",
    vite: "5.3.5",
    "vite-tsconfig-paths": "^4.2.1",
    wrangler: "^3.0.0"
  },
  dependencies: {
    "@googlemaps/js-api-loader": "^1.16.8",
    flowbite: "^3.1.2"
  }
};

// vite.config.ts
var { dependencies = {}, devDependencies = {} } = package_default;
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: []
    },
    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev dependencies. (otherwise things will break in production)
     */
    // ssr:
    //   command === "build" && mode === "production"
    //     ? {
    //         // All dev dependencies should be bundled in the server build
    //         noExternal: Object.keys(devDependencies),
    //         // Anything marked as a dependency will not be bundled
    //         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
    //         // If a dep-of-dep needs to be external, add it here
    //         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
    //         // external: [...Object.keys(dependencies), 'bcrypt']
    //         external: Object.keys(dependencies),
    //       }
    //     : undefined,
    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0"
      }
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
function errorOnDuplicatesPkgDeps(devDependencies2, dependencies2) {
  let msg = "";
  const duplicateDeps = Object.keys(devDependencies2).filter(
    (dep) => dependencies2[dep]
  );
  const qwikPkg = Object.keys(dependencies2).filter(
    (value) => /qwik/i.test(value)
  );
  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;
  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }
  msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcRGVzYXJyb2xsb1xcXFxQcm95ZWN0b3NcXFxcdGVsbGV2b1xcXFx3ZWJcXFxcbGFuZGluZyBhbnRpZ3VvXFxcXGxhbmRpbmdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXERlc2Fycm9sbG9cXFxcUHJveWVjdG9zXFxcXHRlbGxldm9cXFxcd2ViXFxcXGxhbmRpbmcgYW50aWd1b1xcXFxsYW5kaW5nXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9EZXNhcnJvbGxvL1Byb3llY3Rvcy90ZWxsZXZvL3dlYi9sYW5kaW5nJTIwYW50aWd1by9sYW5kaW5nL3ZpdGUuY29uZmlnLnRzXCI7LyoqXHJcbiAqIFRoaXMgaXMgdGhlIGJhc2UgY29uZmlnIGZvciB2aXRlLlxyXG4gKiBXaGVuIGJ1aWxkaW5nLCB0aGUgYWRhcHRlciBjb25maWcgaXMgdXNlZCB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYW5kIGV4dGVuZHMgaXQuXHJcbiAqL1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIHR5cGUgVXNlckNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB7IHF3aWtWaXRlIH0gZnJvbSBcIkBidWlsZGVyLmlvL3F3aWsvb3B0aW1pemVyXCI7XHJcbmltcG9ydCB7IHF3aWtDaXR5IH0gZnJvbSBcIkBidWlsZGVyLmlvL3F3aWstY2l0eS92aXRlXCI7XHJcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XHJcbmltcG9ydCBwa2cgZnJvbSBcIi4vcGFja2FnZS5qc29uXCI7XHJcblxyXG50eXBlIFBrZ0RlcCA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbmNvbnN0IHsgZGVwZW5kZW5jaWVzID0ge30sIGRldkRlcGVuZGVuY2llcyA9IHt9IH0gPSBwa2cgYXMgYW55IGFzIHtcclxuICBkZXBlbmRlbmNpZXM6IFBrZ0RlcDtcclxuICBkZXZEZXBlbmRlbmNpZXM6IFBrZ0RlcDtcclxuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xyXG59O1xyXG5lcnJvck9uRHVwbGljYXRlc1BrZ0RlcHMoZGV2RGVwZW5kZW5jaWVzLCBkZXBlbmRlbmNpZXMpO1xyXG5cclxuLyoqXHJcbiAqIE5vdGUgdGhhdCBWaXRlIG5vcm1hbGx5IHN0YXJ0cyBmcm9tIGBpbmRleC5odG1sYCBidXQgdGhlIHF3aWtDaXR5IHBsdWdpbiBtYWtlcyBzdGFydCBhdCBgc3JjL2VudHJ5LnNzci50c3hgIGluc3RlYWQuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KTogVXNlckNvbmZpZyA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBsdWdpbnM6IFtxd2lrQ2l0eSgpLCBxd2lrVml0ZSgpLCB0c2NvbmZpZ1BhdGhzKCldLFxyXG4gICAgLy8gVGhpcyB0ZWxscyBWaXRlIHdoaWNoIGRlcGVuZGVuY2llcyB0byBwcmUtYnVpbGQgaW4gZGV2IG1vZGUuXHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgLy8gUHV0IHByb2JsZW1hdGljIGRlcHMgdGhhdCBicmVhayBidW5kbGluZyBoZXJlLCBtb3N0bHkgdGhvc2Ugd2l0aCBiaW5hcmllcy5cclxuICAgICAgLy8gRm9yIGV4YW1wbGUgWydiZXR0ZXItc3FsaXRlMyddIGlmIHlvdSB1c2UgdGhhdCBpbiBzZXJ2ZXIgZnVuY3Rpb25zLlxyXG4gICAgICBleGNsdWRlOiBbXSxcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGlzIGFuIGFkdmFuY2VkIHNldHRpbmcuIEl0IGltcHJvdmVzIHRoZSBidW5kbGluZyBvZiB5b3VyIHNlcnZlciBjb2RlLiBUbyB1c2UgaXQsIG1ha2Ugc3VyZSB5b3UgdW5kZXJzdGFuZCB3aGVuIHlvdXIgY29uc3VtZWQgcGFja2FnZXMgYXJlIGRlcGVuZGVuY2llcyBvciBkZXYgZGVwZW5kZW5jaWVzLiAob3RoZXJ3aXNlIHRoaW5ncyB3aWxsIGJyZWFrIGluIHByb2R1Y3Rpb24pXHJcbiAgICAgKi9cclxuICAgIC8vIHNzcjpcclxuICAgIC8vICAgY29tbWFuZCA9PT0gXCJidWlsZFwiICYmIG1vZGUgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAvLyAgICAgPyB7XHJcbiAgICAvLyAgICAgICAgIC8vIEFsbCBkZXYgZGVwZW5kZW5jaWVzIHNob3VsZCBiZSBidW5kbGVkIGluIHRoZSBzZXJ2ZXIgYnVpbGRcclxuICAgIC8vICAgICAgICAgbm9FeHRlcm5hbDogT2JqZWN0LmtleXMoZGV2RGVwZW5kZW5jaWVzKSxcclxuICAgIC8vICAgICAgICAgLy8gQW55dGhpbmcgbWFya2VkIGFzIGEgZGVwZW5kZW5jeSB3aWxsIG5vdCBiZSBidW5kbGVkXHJcbiAgICAvLyAgICAgICAgIC8vIFRoZXNlIHNob3VsZCBvbmx5IGJlIHByb2R1Y3Rpb24gYmluYXJ5IGRlcHMgKGluY2x1ZGluZyBkZXBzIG9mIGRlcHMpLCBDTEkgZGVwcywgYW5kIHRoZWlyIG1vZHVsZSBncmFwaFxyXG4gICAgLy8gICAgICAgICAvLyBJZiBhIGRlcC1vZi1kZXAgbmVlZHMgdG8gYmUgZXh0ZXJuYWwsIGFkZCBpdCBoZXJlXHJcbiAgICAvLyAgICAgICAgIC8vIEZvciBleGFtcGxlLCBpZiBzb21ldGhpbmcgdXNlcyBgYmNyeXB0YCBidXQgeW91IGRvbid0IGhhdmUgaXQgYXMgYSBkZXAsIHlvdSBjYW4gd3JpdGVcclxuICAgIC8vICAgICAgICAgLy8gZXh0ZXJuYWw6IFsuLi5PYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLCAnYmNyeXB0J11cclxuICAgIC8vICAgICAgICAgZXh0ZXJuYWw6IE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcyksXHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgOiB1bmRlZmluZWQsXHJcblxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAvLyBEb24ndCBjYWNoZSB0aGUgc2VydmVyIHJlc3BvbnNlIGluIGRldiBtb2RlXHJcbiAgICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwicHVibGljLCBtYXgtYWdlPTBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmV2aWV3OiB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAvLyBEbyBjYWNoZSB0aGUgc2VydmVyIHJlc3BvbnNlIGluIHByZXZpZXcgKG5vbi1hZGFwdGVyIHByb2R1Y3Rpb24gYnVpbGQpXHJcbiAgICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwicHVibGljLCBtYXgtYWdlPTYwMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbi8vICoqKiB1dGlscyAqKipcclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0byBpZGVudGlmeSBkdXBsaWNhdGUgZGVwZW5kZW5jaWVzIGFuZCB0aHJvdyBhbiBlcnJvclxyXG4gKiBAcGFyYW0ge09iamVjdH0gZGV2RGVwZW5kZW5jaWVzIC0gTGlzdCBvZiBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXNcclxuICogQHBhcmFtIHtPYmplY3R9IGRlcGVuZGVuY2llcyAtIExpc3Qgb2YgcHJvZHVjdGlvbiBkZXBlbmRlbmNpZXNcclxuICovXHJcbmZ1bmN0aW9uIGVycm9yT25EdXBsaWNhdGVzUGtnRGVwcyhcclxuICBkZXZEZXBlbmRlbmNpZXM6IFBrZ0RlcCxcclxuICBkZXBlbmRlbmNpZXM6IFBrZ0RlcCxcclxuKSB7XHJcbiAgbGV0IG1zZyA9IFwiXCI7XHJcbiAgLy8gQ3JlYXRlIGFuIGFycmF5ICdkdXBsaWNhdGVEZXBzJyBieSBmaWx0ZXJpbmcgZGV2RGVwZW5kZW5jaWVzLlxyXG4gIC8vIElmIGEgZGVwZW5kZW5jeSBhbHNvIGV4aXN0cyBpbiBkZXBlbmRlbmNpZXMsIGl0IGlzIGNvbnNpZGVyZWQgYSBkdXBsaWNhdGUuXHJcbiAgY29uc3QgZHVwbGljYXRlRGVwcyA9IE9iamVjdC5rZXlzKGRldkRlcGVuZGVuY2llcykuZmlsdGVyKFxyXG4gICAgKGRlcCkgPT4gZGVwZW5kZW5jaWVzW2RlcF0sXHJcbiAgKTtcclxuXHJcbiAgLy8gaW5jbHVkZSBhbnkga25vd24gcXdpayBwYWNrYWdlc1xyXG4gIGNvbnN0IHF3aWtQa2cgPSBPYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLmZpbHRlcigodmFsdWUpID0+XHJcbiAgICAvcXdpay9pLnRlc3QodmFsdWUpLFxyXG4gICk7XHJcblxyXG4gIC8vIGFueSBlcnJvcnMgZm9yIG1pc3NpbmcgXCJxd2lrLWNpdHktcGxhblwiXHJcbiAgLy8gW1BMVUdJTl9FUlJPUl06IEludmFsaWQgbW9kdWxlIFwiQHF3aWstY2l0eS1wbGFuXCIgaXMgbm90IGEgdmFsaWQgcGFja2FnZVxyXG4gIG1zZyA9IGBNb3ZlIHF3aWsgcGFja2FnZXMgJHtxd2lrUGtnLmpvaW4oXCIsIFwiKX0gdG8gZGV2RGVwZW5kZW5jaWVzYDtcclxuXHJcbiAgaWYgKHF3aWtQa2cubGVuZ3RoID4gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XHJcbiAgfVxyXG5cclxuICAvLyBGb3JtYXQgdGhlIGVycm9yIG1lc3NhZ2Ugd2l0aCB0aGUgZHVwbGljYXRlcyBsaXN0LlxyXG4gIC8vIFRoZSBgam9pbmAgZnVuY3Rpb24gaXMgdXNlZCB0byByZXByZXNlbnQgdGhlIGVsZW1lbnRzIG9mIHRoZSAnZHVwbGljYXRlRGVwcycgYXJyYXkgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxyXG4gIG1zZyA9IGBcclxuICAgIFdhcm5pbmc6IFRoZSBkZXBlbmRlbmN5IFwiJHtkdXBsaWNhdGVEZXBzLmpvaW4oXCIsIFwiKX1cIiBpcyBsaXN0ZWQgaW4gYm90aCBcImRldkRlcGVuZGVuY2llc1wiIGFuZCBcImRlcGVuZGVuY2llc1wiLlxyXG4gICAgUGxlYXNlIG1vdmUgdGhlIGR1cGxpY2F0ZWQgZGVwZW5kZW5jaWVzIHRvIFwiZGV2RGVwZW5kZW5jaWVzXCIgb25seSBhbmQgcmVtb3ZlIGl0IGZyb20gXCJkZXBlbmRlbmNpZXNcIlxyXG4gIGA7XHJcblxyXG4gIC8vIFRocm93IGFuIGVycm9yIHdpdGggdGhlIGNvbnN0cnVjdGVkIG1lc3NhZ2UuXHJcbiAgaWYgKGR1cGxpY2F0ZURlcHMubGVuZ3RoID4gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XHJcbiAgfVxyXG59XHJcbiIsICJ7XHJcbiAgXCJuYW1lXCI6IFwibXktcXdpay1lbXB0eS1zdGFydGVyXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJsYW5rIHByb2plY3Qgd2l0aCByb3V0aW5nIGluY2x1ZGVkXCIsXHJcbiAgXCJlbmdpbmVzXCI6IHtcclxuICAgIFwibm9kZVwiOiBcIl4xOC4xNy4wIHx8IF4yMC4zLjAgfHwgPj0yMS4wLjBcIlxyXG4gIH0sXHJcbiAgXCJlbmdpbmVzLWFubm90YXRpb25cIjogXCJNb3N0bHkgcmVxdWlyZWQgYnkgc2hhcnAgd2hpY2ggbmVlZHMgYSBOb2RlLUFQSSB2OSBjb21wYXRpYmxlIHJ1bnRpbWVcIixcclxuICBcInByaXZhdGVcIjogdHJ1ZSxcclxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcclxuICBcInNjcmlwdHNcIjoge1xyXG4gICAgXCJidWlsZFwiOiBcInF3aWsgYnVpbGRcIixcclxuICAgIFwiYnVpbGQuY2xpZW50XCI6IFwidml0ZSBidWlsZFwiLFxyXG4gICAgXCJidWlsZC5wcmV2aWV3XCI6IFwidml0ZSBidWlsZCAtLXNzciBzcmMvZW50cnkucHJldmlldy50c3hcIixcclxuICAgIFwiYnVpbGQuc2VydmVyXCI6IFwidml0ZSBidWlsZCAtYyBhZGFwdGVycy9jbG91ZGZsYXJlLXBhZ2VzL3ZpdGUuY29uZmlnLnRzXCIsXHJcbiAgICBcImJ1aWxkLnR5cGVzXCI6IFwidHNjIC0taW5jcmVtZW50YWwgLS1ub0VtaXRcIixcclxuICAgIFwiZGVwbG95XCI6IFwid3JhbmdsZXIgcGFnZXMgZGVwbG95IC4vZGlzdFwiLFxyXG4gICAgXCJkZXZcIjogXCJ2aXRlIC0tbW9kZSBzc3JcIixcclxuICAgIFwiZGV2LmRlYnVnXCI6IFwibm9kZSAtLWluc3BlY3QtYnJrIC4vbm9kZV9tb2R1bGVzL3ZpdGUvYmluL3ZpdGUuanMgLS1tb2RlIHNzciAtLWZvcmNlXCIsXHJcbiAgICBcImZtdFwiOiBcInByZXR0aWVyIC0td3JpdGUgLlwiLFxyXG4gICAgXCJmbXQuY2hlY2tcIjogXCJwcmV0dGllciAtLWNoZWNrIC5cIixcclxuICAgIFwibGludFwiOiBcImVzbGludCBcXFwic3JjLyoqLyoudHMqXFxcIlwiLFxyXG4gICAgXCJwcmV2aWV3XCI6IFwicXdpayBidWlsZCBwcmV2aWV3ICYmIHZpdGUgcHJldmlldyAtLW9wZW5cIixcclxuICAgIFwic2VydmVcIjogXCJ3cmFuZ2xlciBwYWdlcyBkZXYgLi9kaXN0IC0tY29tcGF0aWJpbGl0eS1mbGFncz1ub2RlanNfYWxzXCIsXHJcbiAgICBcInN0YXJ0XCI6IFwidml0ZSAtLW9wZW4gLS1tb2RlIHNzclwiLFxyXG4gICAgXCJxd2lrXCI6IFwicXdpa1wiXHJcbiAgfSxcclxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkBidWlsZGVyLmlvL3F3aWtcIjogXCJeMS4xMi4xXCIsXHJcbiAgICBcIkBidWlsZGVyLmlvL3F3aWstY2l0eVwiOiBcIl4xLjEyLjFcIixcclxuICAgIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWVcIjogXCJeNi43LjJcIixcclxuICAgIFwiQHF3aWstdWkvaGVhZGxlc3NcIjogXCJeMC42LjVcIixcclxuICAgIFwiQHR5cGVzL2VzbGludFwiOiBcIjguNTYuMTBcIixcclxuICAgIFwiQHR5cGVzL2dvb2dsZS5tYXBzXCI6IFwiXjMuNTguMVwiLFxyXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIjIwLjE0LjExXCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiNy4xNi4xXCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCI3LjE2LjFcIixcclxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMTRcIixcclxuICAgIFwiZXNsaW50XCI6IFwiOC41Ny4wXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tcXdpa1wiOiBcIl4xLjEyLjFcIixcclxuICAgIFwiZmxvd2JpdGUtcXdpa1wiOiBcIl4wLjM4LjNcIixcclxuICAgIFwiZmxvd2JpdGUtcXdpay1pY29uc1wiOiBcIl4wLjEuOVwiLFxyXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNC4zMVwiLFxyXG4gICAgXCJwcmV0dGllclwiOiBcIjMuMy4zXCIsXHJcbiAgICBcInF3aWstaWNvbnNcIjogXCJeMC4wLjFcIixcclxuICAgIFwidGFpbHdpbmRjc3NcIjogXCJeMy4zLjNcIixcclxuICAgIFwidHlwZXNjcmlwdFwiOiBcIjUuNC41XCIsXHJcbiAgICBcInVuZGljaVwiOiBcIipcIixcclxuICAgIFwidml0ZVwiOiBcIjUuMy41XCIsXHJcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4yLjFcIixcclxuICAgIFwid3JhbmdsZXJcIjogXCJeMy4wLjBcIlxyXG4gIH0sXHJcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgXCJAZ29vZ2xlbWFwcy9qcy1hcGktbG9hZGVyXCI6IFwiXjEuMTYuOFwiLFxyXG4gICAgXCJmbG93Yml0ZVwiOiBcIl4zLjEuMlwiXHJcbiAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFJQSxTQUFTLG9CQUFxQztBQUM5QyxTQUFTLGdCQUFnQjtBQUN6QixTQUFTLGdCQUFnQjtBQUN6QixPQUFPLG1CQUFtQjs7O0FDUDFCO0FBQUEsRUFDRSxNQUFR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
