import type { NextConfig } from "next";

const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";
const repoName = "My_portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGhPages ? `/${repoName}` : undefined,
  assetPrefix: isGhPages ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
