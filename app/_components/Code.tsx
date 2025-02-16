import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export const Code = ({
    className,
    ...props
}: ComponentPropsWithoutRef<"span">) => {
    return (
        <span
            className={clsx(
                "bg-accent/30 hover:bg-accent/50 transition-colors border border-accent my-1 p-1 font-mono rounded-sm",
                className
            )}
            {...props}
        />
    );
};
