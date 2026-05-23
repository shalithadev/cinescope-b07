import type { Metadata } from "next";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/main-nav";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CineScope Movie Database is a web application that allows users to search for movies, view details about them, and create watchlists. It provides an intuitive interface for movie enthusiasts to explore and manage their movie collections.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-12 bg-amber-200 text-black p-4">
        About Us Content Here
      </main>
      <Footer />
    </div>
  );
}
