import DashboardLayout from "@/components/layout/DashboardLayout";
import CardGrid from "@/components/dashboard/CardGrid";
import LaunchList from "@/components/dashboard/LaunchList";

export default async function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Rocket Launches</h1>
      <CardGrid />
      <LaunchList />
    </DashboardLayout>
  );
}
