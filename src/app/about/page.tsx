// app/about/page.tsx (or any page)
import AboutSection from "../components/about/Hero";
import AboutIntro from "../components/about/AboutIntro";
import TeamSection from "../components/about/TeamSection";

export default function AboutPage() {
  return (
   
    <main className="flex-1">
     <AboutSection/>
     <AboutIntro/>
      <TeamSection/>
    </main>
  );
}
