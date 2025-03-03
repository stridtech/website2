import React from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex pt-4 grow">
      <main className="flex-1 p-2 md:p-8 bg-gray-100 border-y">
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
