/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cvai.azurewebsites.net",
        pathname: "/cv_images/**", // Path to the images in the backend
      },
    ],
  },
  // images: {
  //   domains: [new URL(process.env.NEXT_PUBLIC_API_BASE_URL).hostname],
  //   path: "/cv_images/**",
  // },
};

export default nextConfig;
