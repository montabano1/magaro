import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type ContentType = "journal" | "deals";

export type ContentItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover?: string;
  author?: string;
  tag?: string;
  expires?: string;
  location?: string;
  readTime?: string;
  body: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

async function listFiles(type: ContentType): Promise<string[]> {
  const dir = path.join(CONTENT_ROOT, type);
  try {
    const entries = await fs.readdir(dir);
    return entries.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    return [];
  }
}

export async function getAllContent(type: ContentType): Promise<ContentItem[]> {
  const files = await listFiles(type);
  const items = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(CONTENT_ROOT, type, file);
      const raw = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(raw);
      const slug = file.replace(/\.(mdx|md)$/i, "");
      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        date: data.date ?? new Date().toISOString(),
        category: data.category ?? (type === "journal" ? "Field Notes" : "Offer"),
        cover: data.cover ?? undefined,
        author: data.author ?? undefined,
        tag: data.tag ?? undefined,
        expires: data.expires ?? undefined,
        location: data.location ?? undefined,
        readTime: data.readTime ?? undefined,
        body: content,
      } satisfies ContentItem;
    })
  );
  return items.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getContent(
  type: ContentType,
  slug: string
): Promise<ContentItem | null> {
  const items = await getAllContent(type);
  return items.find((i) => i.slug === slug) ?? null;
}

export async function getSlugs(type: ContentType): Promise<string[]> {
  const items = await getAllContent(type);
  return items.map((i) => i.slug);
}
