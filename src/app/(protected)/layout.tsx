import Sidebar from "@/components/custom/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
      {/* <div className="flex-1">
        <Navbar />
        <main className="p-4">
          {children}
        </main>
      </div> */}

    </div>
  );
}