import type { Core } from "@strapi/strapi";

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  "strapi-dz-component-duplicator": {
    enabled: true,
  },
});

export default config;
