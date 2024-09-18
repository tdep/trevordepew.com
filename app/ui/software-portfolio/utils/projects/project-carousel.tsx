'use client';

import { ProjectData, projects } from "@/app/ui/software-portfolio/utils/projects/projects"
import { Dispatch, SetStateAction, useState } from "react"
import ProjectCard from "@/app/ui/software-portfolio/utils/projects/project-card"
import { Project } from "next/dist/build/swc"

export type ProjectProps = {
    projectId: number,
    setProjectId: Dispatch<SetStateAction<number>>,
    project: ProjectData
}

export default function ProjectCarousel() {
    const [projectProject, setProjectProject] = useState<number>(0)
    return(
        <div>
            <ProjectCard />
        </div>
    )
}