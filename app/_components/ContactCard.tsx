import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
}) => {
    return (
        <Link href={props.url}>
            <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                <div className="relative">
                    <img
                        src={props.image}
                        alt={props.name}
                        className="w-10 h-10 rounded-full object-contain"
                    />
                    <img
                        src={props.mediumImage}
                        alt={props.name}
                        className="w-5 h-5 rounded-[999] object-contain absolute -bottom-1 -right-1"
                    />
                </div>
                <div className="mr-auto">
                    <div className="flex items-center gap-2">
                        <p className="text-base font-semibold">{props.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {props.description}
                    </p>
                </div>
                <p className="text-xs text-end text-muted-foreground">
                    <ArrowUpRight
                        className="group-hover:translate-x-2 group-hover:-translate-y-2 mr-4 transition-transform"
                        size={16}
                    />
                </p>
            </Card>
        </Link>
    );
};
