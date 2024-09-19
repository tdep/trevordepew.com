'use client';

import ProjectCard from "@/app/ui/software-portfolio/utils/projects/project-card"
import { CurrentPage, ProjectsComponentProps } from "@/app/lib/types"
import { useState } from "react"
import { ProjectData, projects } from "@/app/ui/software-portfolio/utils/projects/projects"


export default function ProjectCarousel( currentPage : CurrentPage ) {
    const [activeProject, setActiveProject] = useState<number>(3);

    function handleProjectSelect(e:any) {
        setActiveProject(parseInt(e.target.id))
    }



    const ProjectsComponent = (props: ProjectsComponentProps) => {
        const {projects} = props;
        const displayedProjects = projects.slice(currentPage.firstPageIndex, currentPage.lastPageIndex)
        return (
            <ul className={"block"}>
                {displayedProjects.map(
                    p =>
                        p.id === activeProject ?
                            <li id={p.id.toString()} key={p.id} onClick={handleProjectSelect} className={""}>
                                <ProjectCard
                                    key={p.id}
                                    id={p.id}
                                    name={p.name}
                                    description={p.description}
                                    image={p.image}
                                    links={p.links}
                                />
                            </li> :
                            <li id={p.id.toString()} key={p.id} onClick={handleProjectSelect} className={""}>
                                <ProjectCard
                                    key={p.id}
                                    id={p.id}
                                    name={p.name}
                                    description={p.description}
                                    image={p.image}
                                    links={p.links}
                                />
                            </li>
                )}
            </ul>
        );
    }

    return(
        <div>
            <ProjectsComponent projects={projects} />
        </div>
    )
}