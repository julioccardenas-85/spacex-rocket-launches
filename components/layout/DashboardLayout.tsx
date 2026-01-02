import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen dark:bg-gray-900 bg-gray-100 ">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
}
