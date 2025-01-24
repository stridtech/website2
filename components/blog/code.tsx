import { PropsWithChildren } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Code({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const hasLang = /language-(\w+)/.exec(className || "");
  return hasLang ? (
    <SyntaxHighlighter
      style={oneDark}
      language={hasLang[1]}
      PreTag="div"
      className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
      showLineNumbers={true}
      useInlineStyles={true}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className="bg-gray-100 px-2 py-1 rounded-md text-sm font-mono">
      {children}
    </code>
  );
}
