import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { Code } from "./Code";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4 mt-24">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-code">
                J'adore travailler avec...
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <div
                        className="w-10 h-10 object-contain animate-spin"
                        style={{ animationDuration: "10s" }}
                    >
                        <img src="/react.svg" alt="reactjs" />
                    </div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-code">
                        React
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Mon framework Javascript principal est{" "}
                        <Code>React JS</Code>. J'utilise aussi{" "}
                        <Code>Next JS</Code> pour le développement frontend et
                        backend.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div
                        className="w-10 h-10 object-contain animate-pulse"
                        style={{ animationDuration: "5s" }}
                    >
                        <img src="/tailwindcss-icon.svg" alt="tailwindcss" />
                    </div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-code">
                        Tailwind
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Je crée de <u>magnifique</u> applications web en
                        quelques <i>secondes</i> avec <Code>TailwindCSS</Code>{" "}
                        et <Code>shadcn/ui</Code>
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div
                        className="w-10 h-10 object-contain animate-pulse"
                        style={{ animationDuration: "5s" }}
                    >
                        <img src="/postgresql.svg" alt="tailwindcss" />
                    </div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-code">
                        PostgreSQL
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Une base de données relationnelle pour stocker vos
                        données et fichier. J'utilise fréquemment{" "}
                        <Code>Supabase</Code> et <Code>Firebase</Code>
                    </p>
                </div>
            </div>
            <div className="flex max-md:flex-col mt-10 gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <div
                        className="w-10 h-10 object-contain animate-pulse"
                        style={{ animationDuration: "5s" }}
                    >
                        <img src="/git-icon.svg" alt="git" />
                    </div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-code">
                        Git
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Je gère les modifications du <Code>code</Code>,
                        collabore efficacement et gère différentes branches de
                        développement avec <Code>Github</Code>.
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div
                        className="w-10 h-10 object-contain animate-pulse"
                        style={{ animationDuration: "5s" }}
                    >
                        <img src="/nodejs-icon.svg" alt="nodejs" />
                    </div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-code">
                        Node JS
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        La plateforme d'exécution JavaScript côté serveur me
                        permettant de créer des applications{" "}
                        <Code>rapides</Code> et
                        <Code>évolutives</Code>
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div
                        className="w-10 h-10 object-contain animate-pulse"
                        style={{ animationDuration: "5s" }}
                    >
                        <img
                            src="/vercel-icon.svg"
                            alt="vercel"
                            className="bg-accent-foreground p-1"
                        />
                    </div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-code">
                        Vercel
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Je déploie mes applications frontend modernes rapidement
                        sur <Code>Vercel</Code>{" "}
                    </p>
                </div>
            </div>
        </Section>
    );
};
