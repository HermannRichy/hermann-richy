import { PropsWithChildren } from "react";
import clsx from "clsx";

export const Section = (props: PropsWithChildren<{ className?: String }>) => {
    return (
        <section className={clsx("max-w-4xl px-4 m-auto", props.className)}>
            {props.children}
        </section>
    );
};
