import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

// Each destination is a file in /content/destinations/{slug}.mdx
// Adding a new destination = drop in a new file. No code changes needed.

export type Destination = {
  slug: string;
  name: string;
  region: string;
  image: string;
  blurb: string;
  /** Higher = appears earlier on the index. Defaults to 0. */
  order: number;
  /** When set, page is hidden from the index but still routable directly. */
  draft: boolean;
  /** Long-form MDX body for the detail page. */
  body: string;
  /** Optional partner-property notes shown as side details. */
  partners?: string[];
  /** Optional best-time-to-go note. */
  season?: string;
};

const ROOT = path.join(process.cwd(), "content", "destinations");

async function listFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(ROOT);
    return entries.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    return [];
  }
}

export async function getAllDestinations(): Promise<Destination[]> {
  const files = await listFiles();
  const items = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(ROOT, file);
      const raw = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(raw);
      const slug = file.replace(/\.(mdx|md)$/i, "");
      return {
        slug,
        name: data.name ?? slug,
        region: data.region ?? "",
        image: data.image ?? "",
        blurb: data.blurb ?? "",
        order: typeof data.order === "number" ? data.order : 0,
        draft: data.draft === true,
        body: content,
        partners: Array.isArray(data.partners) ? data.partners : undefined,
        season: data.season ?? undefined,
      } satisfies Destination;
    })
  );
  return items
    .filter((d) => !d.draft)
    .sort((a, b) => b.order - a.order || a.name.localeCompare(b.name));
}

export async function getDestination(
  slug: string
): Promise<Destination | null> {
  const all = await getAllDestinations();
  return all.find((d) => d.slug === slug) ?? null;
}

export async function getDestinationSlugs(): Promise<string[]> {
  const all = await getAllDestinations();
  return all.map((d) => d.slug);
}
