'use client';

import { usePathname, useSearchParams } from "next/navigation"
import { generatePagination } from "@/app/lib/utils"
import clsx from "clsx"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"


export default function ProjectPagination({ totalPages }: {totalPages: number}){
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const allPages = generatePagination(currentPage, totalPages);

    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <>
            <div className={"inline-flex"}>
                <PaginationArrow
                    direction={"left"}
                    href={createPageUrl(currentPage - 1)}
                    isDisabled={currentPage <= 1}
                />

                <div className={"flex -space-c-px"}>
                    {allPages.map((page, index) => {
                        let position: 'first' | 'last' | 'single' | 'middle' | undefined;

                        if (index === 0) position = 'first';
                        if (index === allPages.length - 1) position = 'last';
                        if (allPages.length === 1) position = 'single';
                        if (page === '...') position = 'middle';

                        return (
                            <PaginationNumber
                                key={page}
                                href={createPageUrl(page)}
                                page={page}
                                position={position}
                                isActive={currentPage === page}
                            />
                        );
                    })}
                </div>

                <PaginationArrow
                    direction={"right"}
                    href={createPageUrl(currentPage + 1)}
                    isDisabled={currentPage >= totalPages}
                />
            </div>
        </>
    )
}

function PaginationNumber({
    page,
    href,
    isActive,
    position,
                          }: {
    page: number | string;
    href: string;
    position?: 'first' | 'last' | 'middle' | 'single';
    isActive: boolean;
}) {
    const className = clsx(
        'flex h-10 items-center justify-center text-lg border-2 border-black',
        {
            'bg-carrot-500 border-2 border-black': isActive,
            'hover:bg-emerald-500': !isActive && position !== 'middle',
            'text-gray-300': position === 'middle'
        },
    );

    return isActive || position === 'middle' ? (
        <div className={className}>{page}</div>
    ) : (
        <Link href={href} className={className}>
            {page}
        </Link>
    );
}

function PaginationArrow({
    href,
    direction,
    isDisabled,
                         }: {
    href: string;
    direction: 'left' | 'right';
    isDisabled?: boolean;
}) {
    const className = clsx(
        'flex h-10 w-10 items-center justify-center',
        {
            'pointer-events-none text-gray-300': isDisabled,
            'hover:bg-emerald-500': !isDisabled,
            'mr-2 lg:mr-4': direction === 'left',
            'ml-2 lg:ml-4': direction === 'right'
        },
    );

    const icon =
        direction === 'left' ? (
            <ArrowLeftIcon className={"w-4"} />
        ) : (
            <ArrowRightIcon className={"w-4"} />
        );

    return isDisabled ? (
        <div className={className}>{icon}</div>
    ) : (
        <Link href={href} className={className}>
            {icon}
        </Link>
    );
}