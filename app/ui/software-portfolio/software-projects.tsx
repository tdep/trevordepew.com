import ProjectPagination from "@/app/ui/software-portfolio/utils/projects/project-pagination";
import ProjectComponent from "@/app/ui/software-portfolio/utils/projects/project-component";
import ProjectSearch from "@/app/ui/software-portfolio/utils/projects/project-search"
import { projects } from "@/app/ui/software-portfolio/utils/projects/projects";
import { fetchProjects } from "@/app/lib/data";


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

    const totalPages = await fetchProjects(query);

    return (
        <div className={"bg-white-100 m-4 mt-2 lg:m-8"}>
            <div className={"flex flex-row w-full leading-none justify-between"}>
                <div>
                    <p className={"text-7xl"}>Projects</p>
                    <p className={"text-xl"}>Check out some of the things I&apos;ve built!</p>
                </div>
                <div>
                    <ProjectSearch placeholder={"Search projects..."} />
                    <ProjectPagination pages={pages}/>
                </div>
            </div>
            <div>
                <ProjectComponent projects={projects} currentPage={pages.thisPage} />
            </div>
        </div>
    )
}