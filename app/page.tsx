import Footer from "@/components/shared/footer";
import MainNav from "@/components/shared/main-nav";
import HeroBanner from "@/components/landing/hero-banner";

// Second Server Component in the app, used for the home page. You can add page-specific styles, metadata, etc. here.
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Component */}
      <MainNav />
      <main className="flex-1">
        <HeroBanner />
      </main>
      <Footer />
    </div>
  );
}
