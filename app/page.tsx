import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import SlidingText from "@/components/SlidingText";

export default function Home() {
    return (
        <>
            {/* Hero */}
            <Hero />

            {/* Services */}
            <Services />

            {/* Experience */}
            {/* <Experience /> */}

            {/* Portfolio */}
            <Portfolio />

            {/* Skills */}
            <Skills />

            {/* Resume */}
            <Resume />

            <SlidingText />
        </>
    );
}
