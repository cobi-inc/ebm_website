import { PageTransition } from "@/components/PageTransition";

export default function ChaptersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}
