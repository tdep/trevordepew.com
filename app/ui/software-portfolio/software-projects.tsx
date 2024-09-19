'use client';

import ProjectPagination from "@/app/ui/software-portfolio/utils/projects/project-pagination"
import { projects } from "@/app/ui/software-portfolio/utils/projects/projects"
import { useState } from "react"
import { CurrentPage } from "@/app/lib/types"
import ProjectComponent from "@/app/ui/software-portfolio/utils/projects/project-component"

export default function SoftwareProjects() {
    const lastPage = Math.ceil(projects.length / 2)
    const [currentPage, setCurrentPage] = useState<number>(0);
    const cardsPerPage = 2;
    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;

    const thisPage: CurrentPage = {
        thisPage: currentPage,
        firstPageIndex: firstCardIndex,
        lastPageIndex: lastCardIndex
    }

    return (
        <div className={"bg-white-100 m-4 mt-2 lg:m-8"}>
            <div className={"flex flex-row w-full leading-none justify-between"}>
                <div>
                    <p className={"text-7xl"}>Projects</p>
                    <p className={"text-xl"}>Check out some of the things I&apos;ve built!</p>
                </div>
                <div>
                    <ProjectPagination

                    />
                </div>
            </div>
            <div>
                <ProjectComponent projects={projects} currentPage={thisPage} />
            </div>
        </div>
    )
}