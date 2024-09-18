import ProjectPagination from "@/app/ui/software-portfolio/utils/projects/project-pagination"
import ProjectCarousel from "@/app/ui/software-portfolio/utils/projects/project-carousel"

export default function SoftwareProjects() {
    return (
        <div className={"bg-white-100 m-4 mt-2 lg:m-8"}>
            <div className={"flex flex-row w-full leading-none justify-between"}>
                <div>
                    <p className={"text-7xl"}>Projects</p>
                    <p className={"text-xl"}>Check out some of the things I&apos;ve built!</p>
                </div>
                <div>
                    <ProjectPagination />
                </div>
            </div>
            <div>
                <ProjectCarousel />
            </div>
        </div>
    )
}