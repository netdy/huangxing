import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Artist Portfolio",
    short_name: "Artist",
    description: "Official Artist App",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
