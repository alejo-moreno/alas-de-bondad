import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/**/*.{jpg,jpeg,png,webp,avif,svg}",
  { eager: true },
);

/** A local path under `src/assets`, or an absolute http(s) URL. An empty path means no image. */
export function image(path: string): ImageMetadata | string {
  if (path.length === 0) {
    throw new Error("Image path is empty. Skip the figure instead of calling image().");
  }

  if (/^https?:\/\//.test(path)) return path;

  const file = modules[`/src/assets/${path}`];
  if (!file) {
    throw new Error(`Missing image: src/assets/${path}`);
  }

  return file.default;
}
