import Content from "./content.mdx";

export default async function PostPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <article className="prose dark:prose-invert py-4">
        <Content />
      </article>
    </section>
  );
}
