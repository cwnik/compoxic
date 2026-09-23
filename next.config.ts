import type { NextConfig } from "next";

const isInProductionMode = process.env.NODE_ENV === "production";

export default {
    reactCompiler: true,
    reactStrictMode: true,
    typedRoutes: true,
    devIndicators: false,

    env: { BUILD_TIMESTAMPS: Date.now().toString() },

    compiler: isInProductionMode ? { removeConsole: { exclude: ["error"] } } : undefined
} satisfies NextConfig;
