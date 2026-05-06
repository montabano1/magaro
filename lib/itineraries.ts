import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

// Each featured itinerary is a file in /content/itineraries/{slug}.mdx
// Add files to grow the catalog. No code changes needed.

export type Itinerary = {
  slug: string;
  /** Editorial title — abstract framing. e.g., "A family of eleven, six days in Tuscany." */
  title: string;
  /** Who the trip was built for. e.g., "Multigenerational family · 11 travelers, ages 9–82" */
  traveler: string;
  /** Region or city. e.g., "Tuscany & Rome" */
  destination: string;
  /** Number of nights / days. */
  duration: string;
  /** Audience tags. e.g., ["family", "multigenerational"] */
  tags: string[];
  /** One-line summary for the index card. */
  excerpt: string;
  /** Optional cover photo. */
  cover?: string;
  /** Higher = appears earlier on the index. Defaults to 0. */
  order: number;
  /** When set, page is hidden from the index but still routable directly. */
  draft: boolean;
  /** Long-form MDX body — day-by-day cascade. */
  body: string;
};

const ROOT = path.join(process.cwd(), "content", "itineraries");

async function listFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(ROOT);
    return entries.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    return [];
  }
}

export async function getAllItineraries(): Promise<Itinerary[]> {
  const files = await listFiles();
  const items = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(ROOT, file);
      const raw = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(raw);
      const slug = file.replace(/\.(mdx|md)$/i, "");
      return {
        slug,
        title: data.title ?? slug,
        traveler: data.traveler ?? "",
        destination: data.destination ?? "",
        duration: data.duration ?? "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        excerpt: data.excerpt ?? "",
        cover: data.cover ?? undefined,
        order: typeof data.order === "number" ? data.order : 0,
        draft: data.draft === true,
        body: content,
      } satisfies Itinerary;
    })
  );
  return items
    .filter((i) => !i.draft)
    .sort((a, b) => b.order - a.order || a.title.localeCompare(b.title));
}

export async function getItinerary(slug: string): Promise<Itinerary | null> {
  const all = await getAllItineraries();
  return all.find((i) => i.slug === slug) ?? null;
}

export async function getItinerarySlugs(): Promise<string[]> {
  const all = await getAllItineraries();
  return all.map((i) => i.slug);
}
