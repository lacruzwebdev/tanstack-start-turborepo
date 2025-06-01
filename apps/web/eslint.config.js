import tanstackConfig from "@repo/eslint-config/tanstack";
import baseConfig, { restrictEnvAccess } from "@repo/eslint-config/base";
import reactConfig from "@repo/eslint-config/react";

export default [
    {
        ignores: [".output/**", ".vinxi/**"],
    },
    ...baseConfig,
    ...reactConfig,
    ...tanstackConfig,
    ...restrictEnvAccess
];
