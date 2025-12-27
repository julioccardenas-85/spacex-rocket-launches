import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Loading() {
  return (
    <DashboardLayout>
      <div className="p-10 flex flex-col items-center text-center">
        <div className="animate-spin h-10 w-10 border-4 border-gray-400 border-t-transparent rounded-full mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </DashboardLayout>
  );
}
