import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import Plans from "@/components/plans";
import Features from "@/components/features";
import Vendors from "@/components/vendors";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <Plans />
      <Features />
      <Vendors />
      <Footer />
    </div>
  );
}
