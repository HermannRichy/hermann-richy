import { LucideIcon } from "lucide-react";
import Link from "next/link";

type SideProjectProps = {
    logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

export const SideProject = (props: SideProjectProps) => {
    return (
        <Link
            href={props.url}
            className="inline-flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <span className="bg-accent text-accent-foreground p-2 rounded-sm">
                <props.logo size={18} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-lg text-muted-foreground">
                    {props.description}
                </p>
            </div>
        </Link>
    );
};
