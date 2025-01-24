import { PropsWithChildren } from "react";

export default function P({ children }: PropsWithChildren) {
  return <p className="text-[15px] text-gray-800">{children}</p>;
}
