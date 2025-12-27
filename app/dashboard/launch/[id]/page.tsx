import { Launch } from "@/types/launch";
import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import LaunchPatch from "@/components/launch/LaunchPatch";
import { ArrowLeft } from "lucide-react";

async function getLaunch(id: string): Promise<Launch> {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener el lanzamiento");
  }

  return res.json();
}

export default async function LaunchDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const launch = await getLaunch(id);

  const { name, date_utc, success, details, links } = launch;

  return (
    <DashboardLayout>
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft size={18} />
        Back
      </Link>
      <div className="bg-white rounded-xl shadow p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 border-b pb-3 flex items-center gap-3">
          <LaunchPatch
            small={links?.patch?.small}
            large={links?.patch?.large}
            alt={name}
            size={48}
            enableModal={true}
          />
          {name}
        </h1>

        {/* === 2 columns layout === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left - multimedia */}
          <aside className="md:col-span-1 space-y-6 border-r pr-6">
            {/* Pictures */}
            {links?.flickr?.original?.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-3 border-b pb-1">Galery</h2>
                <div className="space-y-4">
                  {links.flickr.original.map((img: string, i: number) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Imagen de ${name}`}
                      className="w-full rounded-lg shadow"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* YouTube */}
            {links?.youtube_id && (
              <div>
                <h2 className="text-xl font-semibold mb-3 border-b pb-1">Official Video</h2>
                <iframe
                  className="w-full h-60 rounded-lg shadow"
                  src={`https://www.youtube.com/embed/${links.youtube_id}`}
                  allowFullScreen
                />
              </div>
            )}
          </aside>

          {/* Right - data */}
          <section className="md:col-span-2 space-y-8">
            <div className="border-b pb-4">
              <h2 className="text-2xl font-semibold mb-2">Launch Information</h2>
              <p>
                <b>Date:</b>{" "}
                {new Date(date_utc).toLocaleDateString("en-US", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>

              <p>
                <b>Status:</b>{" "}
                <span className={`font-bold ${success ? "text-green-600" : "text-red-600"}`}>
                  {success ? "Succesful" : "Failed"}
                </span>
              </p>
            </div>

            <div className="border-b pb-4">
              <h2 className="text-2xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {details || "No additional information available."}
              </p>
            </div>

            {/* Links */}
            {(links?.presskit || links?.article || links?.wikipedia) && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Links</h2>
                <ul className="list-disc list-inside text-blue-600 space-y-1">
                  {links.presskit && <li><a href={links.presskit} target="_blank">Press Kit</a></li>}
                  {links.article && <li><a href={links.article} target="_blank">Official Article</a></li>}
                  {links.wikipedia && <li><a href={links.wikipedia} target="_blank">Wikipedia</a></li>}
                </ul>
              </div>
            )}
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}