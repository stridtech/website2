import "./css/style.css";

import { Inter } from "next/font/google";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "HSM Ingress - Strid Tech",
  description:
    "A Kubernetes ingress with TLS offload using Azure Key Vault or Managed HSM making your cluster FIPS 140-3 compliant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />

          <main className="grow">{children}</main>

          <Footer border={true} />
        </div>
      </body>
    </html>
  );
}
