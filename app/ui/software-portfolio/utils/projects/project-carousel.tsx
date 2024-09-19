'use client';

import { CurrentPage } from "@/app/lib/types"
import { useState } from "react"
import { ProjectData, projects } from "@/app/ui/software-portfolio/utils/projects/projects"
import ProjectComponent from "@/app/ui/software-portfolio/utils/projects/project-component"

type ProjectComponentProps = {
    projects: ProjectData;
    currentPage: CurrentPage;
}


export default function ProjectCarousel( props: ProjectComponentProps ) {
    const [activeProject, setActiveProject] = useState<number>(3);
    const {currentPage} = props;

    function handleProjectSelect(e:any) {
        setActiveProject(parseInt(e.target.id))
    }

    return(
        <div>
            <ProjectComponent projects={projects} currentPage={currentPage}/>
        </div>
    )
}