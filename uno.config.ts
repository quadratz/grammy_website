import { defineConfig, presetWind, presetTypography, presetAttributify, type UserConfig } from 'unocss';

export const unocssConfig: UserConfig = {
  presets: [
    presetAttributify(),
    presetWind({
      prefix: "un-"
    }),
    presetTypography(),
  ],
}

export default defineConfig(unocssConfig);