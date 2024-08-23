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

// A Map of Links to display in the side navigation.
const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Composition Portfolio', href: '/composition-portfolio', icon: MusicalNoteIcon },
    { name: 'Craft Portfolio', href: '/craft-portfolio', icon: PaintBrushIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <> {/*Find a way to make these conditional based on current page */}
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 text-white-100 rounded-md bg-gray-400 p-3 text-xl font-medium hover:bg-amethyst-500 hover:text-white-100 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                'bg-belize-500': link.name === 'Composition Portfolio',
                                'bg-seagreen-500': link.name === 'Craft Portfolio',
                                'bg-amethyst-500': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className={"w-6"} />
                        <p className={"hidden md:block"}>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}