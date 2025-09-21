import About from "@/features/about";
import Contact from "@/features/contact";
import Footer from "@/features/footer";
import { Navbar } from "@/features/navbar";
import { Header } from "@/features/header/Header";
import PreFooter from "@/features/preFooter";
import Pillars from "@/features/pillars";
import { SoulBrazilSection } from "@/features/soulBrazil";
import { RadiantLine } from "@/features/radiantLine";
import { SublimeLine } from "@/features/sublimeLine";
import { BTXRepair } from "@/features/btxRepair";
import { DailyGlow } from "@/features/dailyGlow";
import LanguageModal from "@/components/modal/LanguageModal";

export default function Home() {
  return (
    <>
      <LanguageModal />
      <Navbar />
      <Header />
      <SoulBrazilSection />
      <RadiantLine />
      <SublimeLine />
      <BTXRepair />
      <DailyGlow />
      <Pillars />
      <About />
      <Contact />
      <PreFooter />
      <Footer />
    </>
  );
}
