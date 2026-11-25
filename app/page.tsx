import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Promo } from "@/components/sections/Promo";
import { Business } from "@/components/sections/Business";
import { Location } from "@/components/sections/Location";
import { Complex } from "@/components/sections/Complex";
import { Unit } from "@/components/sections/Unit";
import { Community } from "@/components/sections/Community";
import { Point } from "@/components/sections/Point";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { PromoPopup } from "@/components/PromoPopup";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-[60px] lg:pb-0">
        <Hero />
        <Promo />
        <Business />
        <Location />
        <Complex />
        <Unit />
        <Community />
        <Point />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
      <PromoPopup />
    </>
  );
}
