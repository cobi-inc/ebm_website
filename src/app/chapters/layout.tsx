import { PageTransition } from "@/components/PageTransition";
import { Sidebar } from "@/components/Sidebar";
import { ProgressBar } from "@/components/ProgressBar";

export default function ChaptersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgressBar />
      <Sidebar />
      <div className="ml-0 md:ml-64 transition-[margin] duration-300">
        <PageTransition>{children}</PageTransition>
      </div>
    </>
  );
}
