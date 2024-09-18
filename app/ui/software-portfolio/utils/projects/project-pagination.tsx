import clsx from "clsx"
import { getPaginationItems } from "@/app/lib/utils"
import { HTMLProps } from "react"

export type PaginationProps = {
    currentPage: number;
    lastPage: number;
    maxLength: number;
    setCurrentPage: (page: number) => void;
};

export default function ProjectPagination({
    currentPage,
    lastPage,
    maxLength,
    setCurrentPage

}: PaginationProps) {
    const pageNums = getPaginationItems(currentPage, lastPage, maxLength);

    return (
        <div className={"inline-flex"}>
            <PaginationLink
                direction={"left"}
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                Previous
            </PaginationLink>

            <div className={"flex -space-x-px"}>
                {pageNums.map((page, index) => (
                        <PaginationLink
                            key={page}
                            direction={null}
                            active={currentPage === page}
                            disabled={isNaN(page)}
                            onClick={() => setCurrentPage(page)}
                        >
                            {!isNaN(page) ? page : '...'}
                        </PaginationLink>
                ))}
            </div>

            <PaginationLink
                direction={"right"}
                disabled={currentPage === lastPage}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                Next
            </PaginationLink>
        </div>
    );
}


function PaginationNumber({ page, isActive, position,
                          }: {
    page: number | string; position?: 'first' | 'last' | 'middle' | 'single'; isActive: boolean
}) {
    const className = clsx(
        'flex h-14 w-14 items-center justify-center text-sm border',
        {
            'z-10 bg-blue-600 border-2 border-black text-white': isActive,
            'hover:bg-gray-100': !isActive && position !== 'middle',
            'text-2xl': position === 'middle',
        },
    );

    return isActive || position === 'middle' ? (
        <div className={className}>{page}</div>
    ) : (
        <button className={className}>
            {page}
        </button>
    );
}

type PaginationArrowProps = HTMLProps<HTMLAnchorElement> & { direction: 'left'|'right'|null, active?: boolean};

function PaginationLink({ className, active, disabled, direction, children, ...otherProps }: PaginationArrowProps) {
    const customClassName = clsx(
        'flex h-14 w-14 items-center justify-center',
        {
            'rounded-l-md mr-2 lg:mr-4': direction === 'left',
            'rounded-r-md ml lg:ml-4': direction === 'right',
            'pointer-events-none text-gray-300 border-2 border-gray-300': disabled,
            'hover:bg-gray-100 border-2 border-black shadow-button-inner': !disabled,
        },
    )
    if (disabled) {
        return <span className={customClassName}>{children}</span>;
    }

    return (
        <a
            className={customClassName}
            aria-current={active ? 'page' : undefined}>
            {children}
        </a>
    );
}