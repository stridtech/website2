import { PropsWithChildren } from "react";

export { default as Code } from "./code";

export function H1({ children }: PropsWithChildren) {
  return <h1 className="mb-6 text-3xl font-bold md:text-4xl">{children}</h1>;
}

export function H2({ children }: PropsWithChildren) {
  return <h2 className="mb-5 text-2xl font-bold md:text-3xl">{children}</h2>;
}

export function H3({ children }: PropsWithChildren) {
  return <h3 className="mb-4 text-xl font-bold md:text-2xl">{children}</h3>;
}

export function H4({ children }: PropsWithChildren) {
  return <h4 className="mb-3 text-lg font-bold md:text-xl">{children}</h4>;
}

export function P({ children }: PropsWithChildren) {
  return <p className="mb-4 text-base leading-relaxed">{children}</p>;
}

export function Ul({ children }: PropsWithChildren) {
  return <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>;
}

export function Ol({ children }: PropsWithChildren) {
  return <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>;
}

export function Li({ children }: PropsWithChildren) {
  return <li className="text-base">{children}</li>;
}

export function A({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a href={href} className="text-blue-600 hover:underline">
      {children}
    </a>
  );
}

export function BlockQuote({ children }: PropsWithChildren) {
  return (
    <blockquote className="border-l-4 border-gray-300 pl-4 py-2 mb-4 italic">
      {children}
    </blockquote>
  );
}
