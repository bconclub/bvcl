import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin · Scafell Partners",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-svh bg-ground-deep text-text">{children}</div>;
}
