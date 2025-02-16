import { Section } from "./Section";
import { Code } from "./Code";

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-center gap-4 mt-12">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-code font-bold text-3xl md:text-5xl">
                    Hermann Richy
                </h2>
                <h3 className="font-code font-semibold text-lg md:text-2xl">
                    Développeur web fullstack JS & Formateur
                </h3>
                <p className="text-base">
                    <Code className="inline-flex items-center gap-1">
                        J&apos;adore{" "}
                        <img
                            src="/smiling.svg"
                            className="w-5 inline-block"
                            alt=""
                        />
                    </Code>{" "}
                    coder des sites web & SaaS avec{" "}
                    <Code className="inline-flex items-center gap-1">
                        Next JS{" "}
                        <img
                            src="/nextjs.svg"
                            className="w-5 inline-block"
                            alt=""
                        />
                    </Code>{" "}
                    et{" "}
                    <Code className="inline-flex items-center gap-1">
                        Tailwind CSS{" "}
                        <img
                            src="/tailwind-css.svg"
                            className="w-4 inline-block"
                            alt=""
                        />
                    </Code>{" "}
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img
                    src="/images/hero.png"
                    className="w-full h-auto rounded-full max-w-sm max-md:w-52"
                    alt="Hermann Richy's picture"
                />
            </div>
        </Section>
    );
};
