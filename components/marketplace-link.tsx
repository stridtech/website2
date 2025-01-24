import { PropsWithChildren } from "react";
import Image from "next/image";

import AzureMarketplace from "@/public/images/marketplace/MS_Azure_Marketplace.png";

export default function MarketplaceLink({
  width,
  height,
}: PropsWithChildren<{ width: number; height: number }>) {
  return (
    <a
      href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/stridtech.ingress-nginx-hsm"
      className="btn group mb-4 w-32 bg-gradient-to-t shadow pb-0 pt-0 mx-auto"
    >
      <Image
        className="max-w-none"
        src={AzureMarketplace}
        width={width}
        height={height}
        alt="Stripes"
      />
    </a>
  );
}
