import { PropsWithChildren } from "react";

export default function H3({ children }: PropsWithChildren) {
  return <h3 className="mb-4 text-3xl font-bold md:text-4xl">{children}</h3>;
}
