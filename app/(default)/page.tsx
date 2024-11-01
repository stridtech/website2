const description =
  "A Kubernetes ingress with TLS offload using Azure Key Vault or Managed HSM making your cluster FIPS 140-2 compliant";

export const metadata = {
  title: "HSM Ingress - Strid Tech",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero heading="Secure Ingress with TLS Offload" paragraph={description} />
      {/*<BusinessCategories />*/}
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
