import { Suspense } from 'react';
import { orbitron } from "@/app/ui/fonts"
import { AboutSkeleton, ExperienceSkeleton } from "@/app/ui/skeletons"
import SWPortfolioSection from "@/app/ui/software-portfolio/software-section"
import SoftwareAbout from "@/app/ui/software-portfolio/software-about"
import SoftwareExperience from "@/app/ui/software-portfolio/software-experience"
import SoftwareProjects from "@/app/ui/software-portfolio/software-projects"
import SoftwareContact from "@/app/ui/software-portfolio/software-contact"
import SoftwareFooter from "@/app/ui/software-portfolio/software-footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Software Portfolio',
    description: 'Trevor DePew Software Engineering Portfolio'
};

export default function Page() {
    // TODO: Refactor route to be 'software-portfolio' (after current round of applications)
    // TODO: Add dynamic background (sky/ground - use bg-fixed?) and dark mode
    return (
        <main className={"md:mr-5"}>
            <h1 className={`${orbitron.className} mb-4 text-center text-2xl md:text-4xl md:text-start`}>
                Engineering Portfolio
            </h1>
            <div className={"mb-20"}>
                <Suspense fallback={<AboutSkeleton />}>
                    <SWPortfolioSection sectionName={"about"} SectionContent={<SoftwareAbout />}/>
                </Suspense>
            </div>
            <div className={"mb-20"}>
                <Suspense fallback={<ExperienceSkeleton />}>
                    <SWPortfolioSection sectionName={"experience"} SectionContent={<SoftwareExperience />}/>
                </Suspense>
            </div>
            <div className={"mb-20"}>
                <Suspense fallback={<AboutSkeleton />}>
                    <SWPortfolioSection sectionName={"projects"} SectionContent={<SoftwareProjects />}/>
                </Suspense>
            </div>
            <div className={"mb-20"}>
                <Suspense fallback={<AboutSkeleton />}>
                    <SWPortfolioSection sectionName={"contact"} SectionContent={<SoftwareContact />}/>
                </Suspense>
            </div>
            <div>
                <SoftwareFooter />
            </div>
        </main>
    )
}