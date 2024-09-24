'use client';

import {
    HomeIcon,
    MusicalNoteIcon,
    PaintBrushIcon,
    CodeBracketIcon,
    ArrowUpIcon,
} from "@heroicons/react/24/outline";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import clsx from "clsx";
import TADIcon from "@/app/lib/TADIcon";
import { useEffect, useState } from "react"

// TODO: Refactor Software Portfolio pathname to 'software-portfolio' (after current round of applications)

// A Map of Links to display in the side navigation.
const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Composition Portfolio', href: '/composition-portfolio', icon: MusicalNoteIcon },
    { name: 'Craft Portfolio', href: '/craft-portfolio', icon: PaintBrushIcon },
    { name: 'Software Portfolio', href: '/portfolio', icon: CodeBracketIcon}
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link, i) => {
                const LinkIcon = link.icon;
                if (pathname !== link.href) { // omits the link of the page you're on
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "flex h-[48px] grow items-center justify-center gap-2 p-3 text-xl font-medium bg-white-100 lg:flex-none lg:justify-start lg:p-2 lg:px-3 shadow-button-inner lg:shadow-button-inner-big border-2 border-black",
                                {
                                    "rounded-t-lg": i === 0,
                                    "rounded-b-lg": i === 2, // if the number of links in the side nav changes, this will have to too (not all links are used for each page i.e. no swe link if on swe portfolio)
                                    "lg:hover:bg-amethyst-300 lg:hover:text-white-100": pathname === '/portfolio'
                                }
                            )}
                        >
                            <LinkIcon className={"w-6"}/>
                            <p className={"hidden md:block"}>{link.name}</p>
                        </Link>
                    );
                }
            })}
        </>
    );
}

export function HomeLogoNav() {
    const pathname = usePathname();
    return (
        <>
            {/* Home/Logo at top of nav */}
            <Link
                href={"/"}
                className={clsx(
                    "mb-2 flex h-20 items-center justify-center rounded-md p-4 border-2 border-black",
                    {
                        "bg-amethyst-300 hover:bg-amethyst-500": pathname === '/portfolio',
                    }
                )}
            >
                <TADIcon width={120} height={120} />
            </Link>
        </>
    )
}

export function ScrollToTop() {
    const pathname = usePathname();



    function scrollToTop() {
        const el = document.getElementById("software-top")
        el?.scrollIntoView({behavior:"smooth"})
    }

    return (
        <button
            className={clsx(
                "flex h-[48px] grow items-center justify-center w-full p-3 text-xl font-medium bg-white-100 rounded-lg lg:flex-none lg:justify-start lg:p-2 lg:px-3 shadow-button-inner lg:shadow-button-inner-big border-2 border-black",
                {
                    "lg:hover:bg-amethyst-300 lg:hover:text-white-100": pathname === '/portfolio'
                }
            )}
            onClick={scrollToTop}
        >
            <ArrowUpIcon className={"w-6"}/> Back to Top
        </button>
    )
}