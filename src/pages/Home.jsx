import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import FounderNote from "../components/FounderNote";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="container py-12">
        <Services />
      </section>
      <section className="bg-gray-50 py-12">
        <div className="container">
          <WhyUs />
        </div>
      </section>
      <section className="container py-12">
        <Process />
      </section>
      <section className="container py-12">
        <Pricing />
      </section>
      <section className="container py-12">
        <FounderNote />
      </section>
      <section className="container py-12">
        <FAQ />
      </section>
      <section className="container py-12">
        <Contact />
      </section>
    </div>
  );
}
