import { PropsWithChildren } from "react";

export default function H1({ children }: PropsWithChildren) {
  return <h1 className="mb-6 text-5xl font-bold md:text-6xl">{children}</h1>;
}
