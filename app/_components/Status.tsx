import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SideProject } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { Work } from "./Work";
import {
    Coffee,
    Computer,
    GraduationCap,
    HousePlus,
    Megaphone,
    Rocket,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const SIDE_PROJECTS = [
    {
        logo: Megaphone,
        title: "Virtual Edge Agency",
        description: "Landing page pour une agence de com",
        url: "https://virtualedgeagency.com",
    },
    {
        logo: HousePlus,
        title: "Top Location",
        description: "Plateforme de location immobilière",
        url: "https://toplocation.space",
    },
    {
        logo: Rocket,
        title: "Digital Innovation",
        description: "Landin page pour une agence web",
        url: "https://digitalinnovation.bj",
    },
    {
        logo: GraduationCap,
        title: "Cefora Formation",
        description: "Site vitrine Centre de formation",
        url: "https://ceforaformation.com",
    },
    {
        logo: Coffee,
        title: "Café Antoine",
        description: "Site de présentation de Menu",
        url: "https://cafe-antoine.bj",
    },
    {
        logo: Computer,
        title: "Programme Futur",
        description: "Site vitrive de présentation",
        url: "https://programmefutur.africa",
    },
];

const WORK = [
    {
        image: "/images/di-profil.png",
        title: "Digital I",
        role: "CEO",
        date: "2024 - Now",
        url: "https://digitalinnovation.bj",
    },
    {
        image: "https://www.toplocation.space/_next/image?url=%2Fimages%2Flogo.jpeg&w=64&q=75",
        title: "TopLocation",
        role: "Développeur",
        date: "2024 - Now",
        url: "https://toplocation.space",
        freelance: true,
    },
    {
        image: "https://ceforaformation.com/wp-content/uploads/2024/08/logo-1536x1083.png",
        title: "Cefora",
        role: "Formateur",
        date: "2022 - Now",
        url: "https://ceforaformation.com",
    },
    {
        image: "https://programmefutur.africa/images/logo.png",
        title: "Programme Futur",
        role: "Formateur",
        date: "2023 - Now",
        url: "https://programmefutur.africa",
    },
];

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4 mt-24">
            <Card className="flex-[3] w-full flex flex-col p-4 gap-2">
                <p className="text-lg text-muted-foreground font-code">
                    Projets récents
                </p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECTS.map((project, index) => (
                        <SideProject key={index} {...project} />
                    ))}
                </div>
            </Card>
            <div className="flex-[2] flex flex-col w-full h-full gap-4">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground font-code">
                        Expérience
                    </p>
                    <div className="flex flex-col gap-4">
                        {WORK.map((work, index) => (
                            <Work key={index} {...work} />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground font-code">
                        Contactez-moi
                    </p>
                    <ContactCard
                        image="/images/hero-img3.jpeg"
                        mediumImage="/facebook-v1.svg"
                        name="/hermann.hnv"
                        description="3.700"
                        url="https://facebook.com/hermann.hnv"
                    />
                    <ContactCard
                        image="/images/hero-img3.jpeg"
                        mediumImage="/linkedin-original.svg"
                        name="/hermann-ulrich"
                        description="Open to work"
                        url="https://linkedin.com/in/hermann-ulrich-hounnuvi-508aa9329"
                    />
                </Card>
            </div>
        </Section>
    );
};
