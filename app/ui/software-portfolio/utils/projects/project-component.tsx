import ProjectCard from "@/app/ui/software-portfolio/utils/projects/project-card"
import clsx from "clsx"
import { fetchFilteredProjects } from "@/app/lib/data"


export default async function ProjectComponent({
    query,
    currentPage,
                                         }: {
    query: string;
    currentPage: number;
}){
    const projects = await fetchFilteredProjects(query, currentPage);

    return (
        <div className={"mt-6 flow-root"}>
            <div className={"inline-block min-w-full align-middle"}>
                <div className={""}>
                    <div className={""}>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={clsx("mb-4 lg:mb-2 w-full bg-white-100 p-4 border-2 border-black shadow-section-2d-small",
                                    {
                                        "rounded-t-lg": project.id === 0,
                                        "rounded-b-lg": project.id === projects.length - 1,
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
    );
}