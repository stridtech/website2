export const metadata = {
  title: "HSM Ingress - Strid Tech",
  description:
    "A Kubernetes ingress with TLS offload using Azure Key Vault or Managed HSM making your cluster FIPS 140-3 compliant",
};

import Image from "next/image";
import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

import Logo from "@/public/images/logo-dark.svg";
import Stripes from "@/public/images/stripes.svg";

export default function Home() {
  return (
    <>
      <Hero heading="Secure Ingress with TLS Offload" />
      {/*<BusinessCategories />*/}
      <FeaturesPlanet />
      {/*<LargeTestimonial />*/}
      {/* Stripes illustration */}
      <section className="relative">
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={Stripes}
            width={768}
            alt="Stripes"
            priority
          />
        </div>
        <div className="mx-auto max-w-3xl flex justify-center items-center">
          <Image
            className="rounded-full"
            src={Logo}
            width={400}
            height={400}
            alt="HSM Ingress Controller logo"
          />
        </div>
      </section>
      <Cta />
    </>
  );
}
