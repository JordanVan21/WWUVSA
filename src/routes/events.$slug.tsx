import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { EVENT_META, isEventSlug, type EventSlug } from "@/lib/media";
import { EventDetailPage } from "@/components/EventDetailPage";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    if (!isEventSlug(params.slug)) throw notFound();
    return { event: EVENT_META[params.slug as EventSlug] };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Event not found | WWU VSA" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.name} | WWU VSA` },
        { name: "description", content: event.description },
        { property: "og:title", content: `${event.name} | WWU VSA` },
        { property: "og:description", content: event.description },
        ...(event.heroImage
          ? [
              { property: "og:image", content: event.heroImage },
              { name: "twitter:image", content: event.heroImage },
            ]
          : []),
      ],
    };
  },
  component: EventDetailRoute,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-display text-3xl text-vietnamese-red">Event not found</h1>
      <p className="mt-4 text-on-surface-variant">We couldn't find that event.</p>
      <Link
        to="/events"
        className="mt-6 inline-block rounded-full bg-vietnamese-red px-5 py-2 text-sm font-semibold text-white"
      >
        Back to Events
      </Link>
    </div>
  ),
});

function EventDetailRoute() {
  const { event } = Route.useLoaderData();
  return <EventDetailPage event={event} />;
}