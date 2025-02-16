import { Section } from "./Section";
import { Code } from "./Code";

export const Footer = () => {
    return (
        <div>
            <Section className="text-center my-12 py-10">
                <p className="text-muted-foreground">
                    © 2024 <Code>Hermann Richy</Code>. Tous droits réservés.
                </p>
            </Section>
        </div>
    );
};
