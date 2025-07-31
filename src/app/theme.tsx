import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const brand = "#252C6B";
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: brand }, // メインカラー
        },
        mainBg: { value: "#F7F7F7" },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          // solid: { value: "{colors.brand.500}" },
          // contrast: { value: "{colors.brand.100}" },
          // fg: { value: "{colors.brand.700}" },
          // muted: { value: "{colors.brand.100}" },
          // subtle: { value: "{colors.brand.200}" },
          // emphasized: { value: "{colors.brand.300}" },
          // focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
export const brandColor = brand;
