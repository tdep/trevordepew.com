
import clsx from "clsx"
import { generatePagination } from "@/app/lib/utils"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { Dispatch, SetStateAction } from "react"

export default function ProjectPagination({
                                              currentPage,
                                              totalPages,
                                              setCurrentPage
}: {
    currentPage: number,
    totalPages: number,
    setCurrentPage: Dispatch<SetStateAction<number>>})
{
    const allPages = generatePagination(currentPage, totalPages);

    return (
        <>
            <div className={"inline-flex"}>
                <PaginationArrow
                    direction={"left"}
                    isDisabled={currentPage <= 1}
                />

                <div className={"flex -space-x-px"}>
                    {allPages.map((page, index) => {
                        let position: 'first' | 'last' | 'single' | 'middle' | undefined;

                        if (index === 0) position = 'first';
                        if (index === allPages.length - 1) position = 'last';
                        if (allPages.length === 1) position = 'single';
                        if (page === '...') position = 'middle'

                        return (
                            <PaginationNumber
                                key={page}
                                page={page}
                                position={position}
                                isActive={currentPage === page}
                            />
                        );
                    })}
                </div>

                <PaginationArrow
                    direction={"right"}
                    isDisabled={currentPage >= totalPages}
                />
            </div>
        </>
    );
}


function PaginationNumber({ page, isActive, position,
                          }: {
    page: number | string; position?: 'first' | 'last' | 'middle' | 'single'; isActive: boolean
}) {
    const className = clsx(
        'flex h-10 items-center justify-center text-sm border',
        {
            'rounded-l-md': position === 'first' || position === 'single',
            'rounded-r-md': position === 'last' || position === 'single',
            'z-10 bg-blue-600 border-blue-600 text-white': isActive,
            'hover:bg-gray-100': !isActive && position !== 'middle',
            'text-gray-300': position === 'middle',
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

function PaginationArrow({direction, isDisabled, currentPage, totalPages
}: {
    direction: 'left' | 'right'; isDisabled?: boolean; currentPage: number, totalPages:number, setCurrentPage: Dispatch<SetStateAction<number>>
}) {
    const className = clsx(
        'flex h-10 w-10 items-center justify-center rounded-md border',
        {
            'pointer-events-none text-gray-300': isDisabled,
            'hover:bg-gray-100': !isDisabled,
            'mr-2 lg:mr-4': direction === 'left',
            'ml lg:ml-4': direction === 'right',
        },
    );


    function handleArrowClick(currentPage:number, totalPages:number, setCurrentPage:Dispatch<SetStateAction<number>>, direction:string) {
        let page = currentPage
        if (direction === 'left') {
            if (page > 1){
                page -= 1
                setCurrentPage(page)
            }
        } else if (direction === 'right') {
            if (page < totalPages) {
                page += 1
                setCurrentPage(page)
            }
        }
    }

    const icon =
        direction === 'left' ? (
            <ArrowLeftIcon className={"w-4"} />
        ) : (
            <ArrowRightIcon className={"w-4"} />
        );

    return isDisabled ? (
        <div className={className}>{icon}</div>
    ) : (
        <button
            className={className}
            onClick={() => {
                handleArrowClick(currentPage, totalPages, setCurrentPage(currentPage),  direction)
            }}
        >
            {icon}
        </button>
    );
}