import type { MDXComponents } from "mdx/types";

import {
  A,
  BlockQuote,
  Code,
  H1,
  H2,
  H3,
  H4,
  Li,
  Ol,
  P,
  Ul,
} from "@/components/blog/default";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: A,
    blockquote: BlockQuote,
    code: Code,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    li: Li,
    ol: Ol,
    p: P,
    ul: Ul,
    ...components,
  };
}
