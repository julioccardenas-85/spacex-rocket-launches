import { DashboardCard } from "@/types/dashboard";

export default function Card({ title, value, description }: DashboardCard) {
    const statusColor =
        title === "Succesful"
            ? "text-green-700"
            : title === "Failed"
                ? "text-red-700"
                : "text-gray-500";

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h3 className={`text-sm ${statusColor}`}>{title}</h3>
            <p className="text-3xl font-bold mt-2">{value}</p>
            {description && (
                <p className="text-sm text-gray-400 mt-1">{description}</p>
            )}
        </div>
    );
}
