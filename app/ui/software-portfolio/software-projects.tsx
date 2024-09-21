import ProjectPagination from "@/app/ui/software-portfolio/utils/projects/project-pagination";
import ProjectComponent from "@/app/ui/software-portfolio/utils/projects/project-component";
import ProjectSearch from "@/app/ui/software-portfolio/utils/projects/project-search"
import { fetchProjectsPages } from "@/app/lib/data"


export default async function SoftwareProjects({
    searchParams,
                                               }: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchProjectsPages(query);

    return (
        <div className={"bg-white-100 m-4 mt-2 lg:m-8"}>
            <div className={"flex flex-row w-full leading-none justify-between"}>
                <div>
                    <p className={"text-5xl"}>Projects</p>
                    <p className={"text-xl"}>Check out some of the things I&apos;ve built!</p>
                </div>
            </div>
            <div>
                <ProjectComponent query={""} currentPage={currentPage} />
            </div>
        </div>
    );
}