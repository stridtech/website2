"use client";
import React, { useState } from "react";
import Link from "next/link";

const docs = [
  {
    href: "/docs/bicep-installation",
    title: "Bicep Installation",
  },
  {
    href: "/docs/terraform-installation",
    title: "Terraform Installation",
  },
  /*{
    href: "/docs/manual-installation",
    title: "Manual Installation",
  },*/
  {
    href: "/docs/configuring-ingress",
    title: "Configure Ingress",
  },
];

const get_className = (idx: number) => {
  const base =
    "pt-2 pb-2 border-b border-gray-300 text-center hover:bg-gray-200";
  if (idx === 0) {
    return `${base} border-t`;
  } else {
    return base;
  }
};

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex pt-4 grow">
      {docs.length > 1 ? (
        <aside
          className={`fixed md:static w-64 min-w-44 border-r-2 border-b border-gray-200 pb-4 md:block bg-white h-full md:h-auto transition-transform duration-300 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-64 md:translate-x-0"
          }`}
        >
          <nav>
            <ul>
              {docs.map((doc, i) => (
                <Link href={doc.href} key={doc.href} onClick={toggleSidebar}>
                  <li className={get_className(i)}>{doc.title}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </aside>
      ) : null}
      <main className="flex-1 p-2 md:p-8 bg-gray-100 border-y">
        {docs.length > 1 ? (
          <button
            className={`md:hidden border-r-2 border-y-2 border-gray-200 rounded-r-lg -ml-2 -mt-2 bg-white hamburger-menu transition-transform duration-300 transform ${
              sidebarOpen ? "translate-x-64" : "-translate-x-0 md:translate-x-0"
            }`}
            onClick={toggleSidebar}
          >
            <div className="hamburger-line bg-gray-800"></div>
            <div className="hamburger-line bg-gray-800"></div>
            <div className="hamburger-line bg-gray-800"></div>
          </button>
        ) : null}
        <section className="mx-auto w-full max-w-[90vw] px-4 sm:px-6">
          <div className="overflow-x-auto">
            <article className="prose dark:prose-invert py-4 min-w-full">
              {children}
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Layout;
