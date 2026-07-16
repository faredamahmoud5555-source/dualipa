import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import TrendingSection from "@/components/TrendingSection";
import VibeTeaserSection from "@/components/VibeTeaserSection";
import DepartmentsSection from "@/components/DepartmentsSection";

import CultureGraphTeaser from "@/components/CultureGraphTeaser";
import CollectionsTeaser from "@/components/CollectionsTeaser";
import QuoteSection from "@/components/QuoteSection";
import AICurator from "@/components/AICurator";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Ticker />
        <TrendingSection />
        <VibeTeaserSection />
        <DepartmentsSection />
       
        <CultureGraphTeaser />
        <CollectionsTeaser />
        <QuoteSection />
        <AICurator />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
