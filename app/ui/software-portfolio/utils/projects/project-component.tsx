import { PageIndices } from "@/app/lib/types"
import ProjectCard from "@/app/ui/software-portfolio/utils/projects/project-card"
import { ProjectData } from "@/app/ui/software-portfolio/utils/projects/projects"
import clsx from "clsx"

type ProjectComponentProps = {
    projects: ProjectData[];
    currentPage: number;
}

export default function ProjectComponent(props: ProjectComponentProps){
    const {projects} = props;
    const {currentPage} = props;

    return (
        <div className={"mt-6 flow-root"}>
            <div className={"inline-block min-w-full align-middle"}>
                <div className={""}>
                    <div className={""}>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={clsx("mb-2 w-full bg-white-100 p-4 border-2 border-black shadow-section-2d-small",
                                    {
                                        "rounded-t-lg": project.id === 0,
                                        "rounded-b-lg": project.id === projects.length - 1,
                                        "hidden": project.id !== 4
                                    }
                                )}
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