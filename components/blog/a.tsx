import { PropsWithChildren } from "react";

export default function A({ children, href }: PropsWithChildren<{href: string}>) {
  return <a className="text-blue-500 transition hover:text-blue-600" href={href}>{children}</a>