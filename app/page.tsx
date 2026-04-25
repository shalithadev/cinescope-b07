import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-12 bg-amber-200 text-black p-4">
        Main Content Here
      </main>
      <Footer />
    </div>
  );
}
