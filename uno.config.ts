import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetWind,
  type UserConfig,
} from "unocss";

export const unocssConfig: UserConfig = {
  presets: [
    presetAttributify(),
    presetWind({
      prefix: "un-",
    }),
    presetTypography(),
  ],
};

export default defineConfig(unocssConfig);
