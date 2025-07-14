/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true
  },
  tailwind: true,
  postcss: true,
  serverDependenciesToBundle: [/.*\.css$/],
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  watchPaths: ["./app/**/*"],
  serverBuildPath: "build/index.js",
}; 