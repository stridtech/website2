import { PropsWithChildren } from "react";

export default function H4({ children }: PropsWithChildren) {
  return <h4 className="mb-3 text-2xl font-bold md:text-3xl">{children}</h4>;
}
