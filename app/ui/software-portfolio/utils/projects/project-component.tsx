'use client';

import ProjectCard from "@/app/ui/software-portfolio/utils/projects/project-card"
import clsx from "clsx"
import { fetchFilteredProjects } from "@/app/lib/data"
import { useState } from "react"


export default function ProjectComponent({
    query,
    currentPage,
                                         }: {
    query: string;
    currentPage: number;
}){
    const projects =  fetchFilteredProjects(query, currentPage);
    const [selectedProject, setSelectedProject] = useState<number>(0);


    return (
        <div className={"mt-6 flow-root"}>
            <div className={"min-w-full align-middle"}>
                {/* Desktop */}
                <div className={"hidden lg:block"}>
                    <div className={""}>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={clsx("mb-2 w-full bg-white-100 p-4 border-2 border-black shadow-section-2d-small",
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

                {/* Mobile */}
                <div className={"flex flex-col lg:hidden"}>
                    <div className={"flex flex-row mx-1 border-2 border-black shadow-section-2d-small overflow-x-scroll"}>
                        {projects.map((project) => {
                            return (
                                <div
                                    key={project.id}
                                    className={clsx(
                                        'flex h-12 justify-items-center items-center text-nowrap m-1 border-[1px] border-black shadow-button-inner',
                                        {
                                            'bg-emerald-200': project.id !== selectedProject,
                                            'bg-belize-300': project.id === selectedProject,
                                            'ml-1': project.id !== 0,
                                            'mr-1': project.id !== projects.length - 1
                                        }
                                    )}
                                    onClick={() => {
                                        setSelectedProject(project.id)
                                    }}
                                >
                                    <p className={"text-xl mx-3"}>{project.name}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className={""}>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={clsx("my-4 w-full bg-white-100 p-4 border-2 border-black shadow-section-2d-small rounded-lg",
                                    {
                                        'hidden': project.id !== selectedProject
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