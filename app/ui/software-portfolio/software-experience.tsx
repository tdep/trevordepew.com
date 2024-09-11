'use client';

import SkillFilter from "@/app/ui/software-portfolio/utils/skill-filter"
import { Dispatch, SetStateAction, useState } from "react"
import ExperienceList from "@/app/ui/software-portfolio/utils/experience-list"
import ExperienceDescriptions from "@/app/ui/software-portfolio/utils/experience-descriptions"

export type DescriptionFilterProps = {
    filteredExperiences: number[],
    setFilteredExperiences: Dispatch<SetStateAction<number[]>>
    selectedExperience: number,
    setDescription: Dispatch<SetStateAction<number>>,
    activeFilter: string | null,
    setActiveFilter: Dispatch<SetStateAction<string | null>>
}

export default function SoftwareExperience() {
    const [filteredExperiences, setFilteredExperiences] = useState<number[]>([0,1,2,3,4,5,6,7,8,9,10]); //TODO: change to grab list of exp. ids instead of hardcoding
    const [selectedExperience, setSelectedExperience] = useState<number>(8);
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    return (
        <div className={"flex flex-col leading-none bg-white-100 m-4 mt-2 lg:m-8"}>
            <div className={"flex flex-col items-start w-full text-center"}>
                <p className={"text-5xl mb-2"}>Work Experience</p>
                <p className={"w-full text-lg text-justify mb-1 mt-2 lg:text-xl"}>
                    I&apos;m lucky to have had a variety of work experiences over the years in all sorts of disciplines.
                    Many have aligned with passions but a few have been particularly poignant. I&apos;ve listed those
                    here.
                </p>
            </div>

            {/* Desktop */}
            <div className={"hidden lg:block mt-4"}>
                <div className={"w-full flex justify-center border-2 border-black shadow-section-2d-small"}>
                    <div className={"m-2 w-full"}>
                        <SkillFilter
                            filteredExperiences={filteredExperiences}
                            setFilteredExperiences={filter => setFilteredExperiences(filter)}
                            selectedExperience={selectedExperience}
                            setDescription={selectedExperience => setSelectedExperience(selectedExperience)}
                            activeFilter={activeFilter}
                            setActiveFilter={activeFilter => setActiveFilter(activeFilter)}
                        />
                    </div>
                </div>
                <div className={"grid grid-cols-4 mt-4"}>
                    <div className={"col-span-1"}>
                        <ExperienceList
                            filteredExperiences={filteredExperiences}
                            setFilteredExperiences={filter => setFilteredExperiences(filter)}
                            selectedExperience={selectedExperience}
                            setDescription={selectedExperience => setSelectedExperience(selectedExperience)}
                            activeFilter={activeFilter}
                            setActiveFilter={activeFilter => setActiveFilter(activeFilter)}
                        />
                    </div>
                    <div className={"col-span-3"}>
                        <ExperienceDescriptions
                            filteredExperiences={filteredExperiences}
                            setFilteredExperiences={filter => setFilteredExperiences(filter)}
                            selectedExperience={selectedExperience}
                            setDescription={selectedExperience => setSelectedExperience(selectedExperience)}
                            activeFilter={activeFilter}
                            setActiveFilter={activeFilter => setActiveFilter(activeFilter)}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className={"block lg:hidden"}>
                <div className={"flex flex-col mt-4"}>
                    <div className={""}>
                        <ExperienceList
                            filteredExperiences={filteredExperiences}
                            setFilteredExperiences={filter => setFilteredExperiences(filter)}
                            selectedExperience={selectedExperience}
                            setDescription={selectedExperience => setSelectedExperience(selectedExperience)}
                            activeFilter={activeFilter}
                            setActiveFilter={activeFilter => setActiveFilter(activeFilter)}
                        />
                    </div>
                    <div className={""}>
                        <ExperienceDescriptions
                            filteredExperiences={filteredExperiences}
                            setFilteredExperiences={filter => setFilteredExperiences(filter)}
                            selectedExperience={selectedExperience}
                            setDescription={selectedExperience => setSelectedExperience(selectedExperience)}
                            activeFilter={activeFilter}
                            setActiveFilter={activeFilter => setActiveFilter(activeFilter)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}