'use client';

import ProjectCard from "@/app/ui/software-portfolio/utils/projects/project-card"

type CurrentPage = {
    thisPage: number;
    firstPageIndex: number;
    lastPageIndex: number;
};


export default function ProjectCarousel( currentPage : CurrentPage ) {
    return(
        <div>
            <ProjectCard />
        </div>
    )
}