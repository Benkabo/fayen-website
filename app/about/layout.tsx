import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fayen Travel Agency | Book With Us",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
