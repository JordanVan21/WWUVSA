import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProgram } from "@/lib/programs";
import { ProgramDetailPage } from "@/components/ProgramDetailPage";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Program not found | WWU VSA" }, { name: "robots", content: "noindex" }] };
    }
    const { program } = loaderData;
    const title = `${program.name} | WWU VSA Programs`;
    return {
      meta: [
        { title },
        { name: "description", content: program.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: program.shortDescription },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(program.heroImage
          ? [
              { property: "og:image", content: program.heroImage },
              { name: "twitter:image", content: program.heroImage },
            ]
          : []),
      ],
    };
  },
  component: ProgramRoute,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-display text-3xl text-vietnamese-red">Program not found</h1>
      <p className="mt-4 text-on-surface-variant">We couldn't find that program.</p>
      <Link to="/about" className="mt-6 inline-block rounded-full bg-vietnamese-red px-5 py-2 text-sm font-semibold text-white">
        Back to About
      </Link>
    </div>
  ),
});

function ProgramRoute() {
  const { program } = Route.useLoaderData();
  return <ProgramDetailPage program={program} />;
}
