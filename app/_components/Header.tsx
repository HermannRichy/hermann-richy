"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { useTheme } from "next-themes";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
    const { setTheme } = useTheme();

    return (
        <header className="sticky top-0 py-4 bg-background">
            <Section className="flex items-baseline">
                <h1 className="text-md font-code font-bold">Hermann Richy</h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link
                        className={clsx(
                            buttonVariants({ variant: "outline" }),
                            "size-12 p-0"
                        )}
                        href="https://github.com/HermannRichy"
                    >
                        <Github size={12} className="text-foreground" />
                    </Link>
                    <Link
                        className={clsx(
                            buttonVariants({ variant: "outline" }),
                            "size-12 p-0"
                        )}
                        href="https://linkedin.com/HermannRichy"
                    >
                        <Linkedin size={12} className="text-foreground" />
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setTheme("system")}
                            >
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ul>
            </Section>
        </header>
    );
};
