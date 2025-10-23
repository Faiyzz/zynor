import Hero from "./components/Hero";
import Vision from "./components/Vision";
import ServicesShowcase from "./components/ServiceShowcase";
import CTA from "./components/CTA";






export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <Vision />
         <ServicesShowcase />
         <CTA />
      </main>
     
    </>
  );
}