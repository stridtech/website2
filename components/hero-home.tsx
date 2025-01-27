import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import AzureMarketplace from "@/public/images/marketplace/MS_Azure_Marketplace.png";

type Props = {
  heading: string;
};

export default function HeroHome({ heading }: Props) {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
              {heading}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-700">
                A Kubernetes ingress with TLS offload using Azure Key Vault or
                Managed HSM <br className="max-lg:hidden" />
                making your cluster{" "}
                <span className="font-bold">FIPS 140-3</span> compliant
              </p>
              <a
                href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/stridtech.ingress-nginx-hsm"
                className="btn group mb-4 w-32 bg-gradient-to-t shadow pb-0 pt-0 mx-auto"
              >
                <Image
                  className="max-w-none"
                  src={AzureMarketplace}
                  width={189}
                  height={67}
                  alt="Stripes"
                />
              </a>
            </div>
          </div>
          {/*
          <div className="mx-auto max-w-3xl flex justify-center items-center">
            <Image
              className="rounded-full bg-gray-900"
              src={HeroKeyBridge}
              width={400}
              height={400}
              alt="Planet"
            />
          </div>
           Hero image 
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  cruip.com
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  npm login
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  --registry=https://npm.pkg.github.com
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --scope=@phanatic
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Successfully logged-in.
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  npm publish
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Package published.
                </span>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
}
