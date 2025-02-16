import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type workProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
};

export const Work = (props: workProps) => {
    return (
        <Link
            href={props.url}
            className="inline-flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <img
                src={props.image}
                alt={props.title}
                className="w-10 h-10 object-contain rounded-sm"
            />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-base font-semibold">{props.title}</p>
                    {props.freelance && (
                        <Badge variant="outline">Mission</Badge>
                    )}
                </div>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">
                {props.date}
            </p>
        </Link>
    );
};
