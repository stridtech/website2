import { PropsWithChildren } from "react";

export default function H2({ children }: PropsWithChildren) {
  return <h2 className="mb-5 text-4xl font-bold md:text-5xl">{children}</h2>;
}
