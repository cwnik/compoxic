import type { NextConfig } from "next";

const isInProductionMode = process.env.NODE_ENV === "production";

export default {
    reactCompiler: true,
    reactStrictMode: true,
    typedRoutes: true,
    devIndicators: false,

    env: { BUILD_TIMESTAMPS: Date.now().toString() },
    experimental: { optimizePackageImports: [] },
    images: { remotePatterns: [], qualities: [75, 100] },

    compiler: isInProductionMode ? { removeConsole: { exclude: ["error"] } } : undefined
} satisfies NextConfig;
