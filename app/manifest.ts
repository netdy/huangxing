import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "黄星⭐️🦋",
    short_name: "黄星⭐️🦋",
    description: "黄星⭐️🦋",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon/apple.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
