import { getSortedPostsData } from "../../lib/posts";
import Hero from "@/components/hero-home";

export const metadata = {
  title: "HSM Ingress - Strid Tech",
  description:
    "A Kubernetes ingress with TLS offload using Azure Key Vault or Managed HSM making your cluster FIPS 140-3 compliant",
};

export default function Blog() {
  const allPostsData = getSortedPostsData();
  return (
    <>
      <Hero heading="Secure Ingress with TLS Offload" />
      <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
        <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
          {allPostsData.map(({ id, date, title }) => (
            <a href={`/posts/${id}`} key={id}>
              <article>
                <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                  {title}
                </h3>
                <p className="text-[15px] text-gray-400">{date.toString()}</p>
              </article>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
