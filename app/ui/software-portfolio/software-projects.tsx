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

    const totalPages =  fetchProjectsPages(query);

    return (
        <div className={"bg-white-100 m-4 mt-2 lg:m-8"}>
            <div className={"flex flex-col items-start w-full text-center"}>
                <p className={"text-5xl"}>Projects</p>
                <p className={"text-2xl"}>Check out some of the things I&apos;ve built!</p>
            </div>
            <div>
                <ProjectComponent query={""} currentPage={currentPage} />
            </div>
        </div>
    );
}