"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Launch } from "@/types/launch";
import LaunchPatch from "@/components/launch/LaunchPatch";

export default function LaunchList() {
    const [launches, setLaunches] = useState<Launch[]>([]);
    const [visibleCount, setVisibleCount] = useState(10);
    const [filter, setFilter] = useState("all"); // all | success | failed | upcoming
    const [loading, setLoading] = useState(true);

    // Get all launches
    useEffect(() => {
        const fetchLaunches = async () => {
            setLoading(true);
            const res = await fetch("https://api.spacexdata.com/v5/launches");
            const data: Launch[] = await res.json();

            // Date desc sorting
            const sorted = data.sort(
                (a, b) => new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime()
            );

            setLaunches(sorted);
            setLoading(false);
        };

        fetchLaunches();
    }, []);

    // Filters
    const filteredLaunches = launches.filter((launch) => {
        if (filter === "success") return launch.success;
        if (filter === "failed") return launch.success === false;
        if (filter === "upcoming") return launch.upcoming;
        return true;
    });

    // Infinite scroll
    const loadMore = () => setVisibleCount((prev) => prev + 10);

    return (
        <section className="bg-white rounded-xl shadow p-6 mt-8">

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Launches</h2>

                {/* Filter */}
                <select
                    className="border p-2 rounded-md"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="success">Succesful</option>
                    <option value="failed">Failed</option>
                    <option value="upcoming">Upcoming</option>
                </select>
            </div>

            {/* Loading */}
            {loading && <p className="text-center text-gray-500">Loading...</p>}

            <ul className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {filteredLaunches.slice(0, visibleCount).map((launch) => (
                    <li
                        key={launch.id}
                        className="border-b pb-3 flex items-center justify-between"
                    >
                        <div>
                            <Link href={`/dashboard/launch/${launch.id}`}>
                                <div className="flex items-center gap-3 cursor-pointer hover:underline">
                                    <LaunchPatch
                                        small={launch.links?.patch?.small}
                                        large={launch.links?.patch?.large}
                                        alt={launch.name}
                                        size={40}
                                    />
                                    <p className="font-semibold">{launch.name}</p>
                                </div>
                            </Link>

                            <p className="text-sm text-gray-500">
                                Date: {new Date(launch.date_utc).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "2-digit",
                                    year: "numeric",
                                })}
                            </p>
                        </div>

                        <span
                            className={`text-sm font-medium px-3 py-1 rounded-full
                                ${launch.upcoming && "bg-blue-100 text-blue-700"}
                                ${launch.success && "bg-green-100 text-green-700"}
                                ${launch.success === false && "bg-red-100 text-red-700"}
                            `}
                        >
                            {launch.upcoming ? "Próximo" : launch.success ? "Éxito" : "Fallido"}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Infinite scroll button */}
            {visibleCount < filteredLaunches.length && (
                <button
                    onClick={loadMore}
                    className="mt-4 w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200"
                >
                    Load more
                </button>
            )}
        </section>
    );
}
