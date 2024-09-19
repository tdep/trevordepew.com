import { ProjectsComponentProps, CurrentPage } from "@/app/lib/types"
import ProjectCard from "@/app/ui/software-portfolio/utils/projects/project-card"

export default function ProjectComponent(props: ProjectsComponentProps, currentPage: CurrentPage) {
    const {projects} = props;
    const displayedProjects = projects.slice(currentPage.firstPageIndex, currentPage.lastPageIndex);

    return (
        <div className={"mt-6 flow-root"}>
            <div className={"inline-block min-w-full align-middle"}>
                <div className={"rounded-lg bg-gray-100 p-2 lg:pt-0"}>
                    <div className={""}>
                        {displayedProjects.map((project) => (
                            <div
                                key={project.id}
                                className={"mb-2 w-full bg-white-100 p-4"}
                            >
                                <ProjectCard
                                    id={project.id}
                                    name={project.name}
                                    description={project.description}
                                    links={project.links}
                                    image={project.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}