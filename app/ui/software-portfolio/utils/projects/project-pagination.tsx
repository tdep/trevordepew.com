import { PageIndices } from "@/app/lib/types"

type PaginationProps = {
    pages: PageIndices
}

export default function ProjectPagination(props: PaginationProps){
    const {pages} = props;
    return (
        <div>
            {pages.lastPageIndex}
        </div>
    )
}