import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Status />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
}
