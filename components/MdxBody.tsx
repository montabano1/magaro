import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import { unified } from "unified";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

export default async function MdxBody({ source }: { source: string }) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug);

  const mdast = processor.parse(source);
  const hast = await processor.run(mdast);

  const content = toJsxRuntime(hast, {
    Fragment,
    jsx: jsx as Parameters<typeof toJsxRuntime>[1]["jsx"],
    jsxs: jsxs as Parameters<typeof toJsxRuntime>[1]["jsxs"],
    elementAttributeNameCase: "html",
  });

  return <div className="prose-editorial">{content}</div>;
}
