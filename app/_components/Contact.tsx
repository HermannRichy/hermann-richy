import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4 mt-24">
            <Badge variant={"outline"}>Contactez moi</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Je serai ravi de travailler avec vous.
            </h2>
            <div className="w-full flex max-md:flex-col justify-between gap-4">
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
                <ContactCard
                    image="/images/hero-img3.jpeg"
                    mediumImage="/gmail.svg"
                    name="@hermannrichy15"
                    description="Join me"
                    url="mailto:hermannrichy15@gmail.com"
                />
            </div>
        </Section>
    );
};
