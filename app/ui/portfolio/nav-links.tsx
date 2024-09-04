'use client';

import {
    HomeIcon,
    MusicalNoteIcon,
    PaintBrushIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import clsx from "clsx";
import TADIcon from "@/app/lib/TADIcon";

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
            {links.map((link) => {
                const LinkIcon = link.icon;
                if (pathname !== link.href) { // omits the link of the page you're on
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "flex h-[48px] grow items-center justify-center gap-2 text-white-100 rounded-md p-3 text-xl font-medium hover:bg-orange-500 hover:text-white-100 md:flex-none md:justify-start md:p-2 md:px-3",
                                {
                                    // dynamic background colors for side-nav links
                                    'bg-belize-500': pathname === '/composition-portfolio',
                                    'bg-seagreen-500': pathname === '/craft-portfolio',
                                    'bg-amethyst-500': pathname === '/portfolio',
                                },
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
                    "mb-2 flex h-20 items-center justify-center rounded-md p-4 md:h",
                    {
                        // dynamic background colors for side-nav home/logo link
                        'bg-belize-500': pathname === '/composition-portfolio',
                        'bg-seagreen-500': pathname === '/craft-portfolio',
                        'bg-amethyst-500': pathname === '/portfolio',
                    },
                )}
            >
                <TADIcon width={120} height={120} />
            </Link>
        </>
    )
}