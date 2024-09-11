import { SkillCategory, skillsList } from "@/app/ui/software-portfolio/utils/work-experience"
import { DescriptionFilterProps } from "@/app/ui/software-portfolio/software-experience"
import { inter } from "@/app/ui/fonts"
import clsx from "clsx"


export default function SkillFilter({ setFilteredExperiences, activeFilter, setActiveFilter }: DescriptionFilterProps) {
    //TODO: set visual feedback for button clicks
    //TODO: Create filter category display
    return(
        <div className={"grid grid-cols-12"}>
            <div className={"col-span-1 w-24 overflow-hidden text-nowrap mr-4"}>
                <p
                    className={"flex items-center justify-center h-32 text-lg border-2 border-black rounded-lg p-1 bg-gray-600 hover:bg-gray-800 hover:cursor-pointer"}
                    onClick={() => {
                        setFilteredExperiences([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                        setActiveFilter(null)
                    }} //TODO: see software-experience
                >
                    Clear Filter
                </p>
            </div>

            <div className={"col-span-11 flex flex-wrap justify-items-center"}>

                {skillsList.map((skill) => {
                    return (
                        <div
                            key={skill.name}
                            className={'overflow-hidden text-nowrap'}
                        >
                            <p className={clsx(
                                `${inter.className} text-[14px] text-center border-2 border-black rounded-lg p-1 lg:hover:opacity-50 hover:cursor-pointer`,
                                {
                                    'bg-belize-300': skill.category === SkillCategory.LANGUAGE,
                                    'bg-carrot-300': skill.category === SkillCategory.FRAMEWORK,
                                    'bg-emerald-300': skill.category === SkillCategory.SOFT,
                                    'bg-seagreen-300': skill.category === SkillCategory.METHOD,
                                    'bg-blue-300': skill.category === SkillCategory.CONCEPT,
                                    'bg-pomegranate-300': skill.category === SkillCategory.TESTING,
                                    'bg-amethyst-300': skill.category === SkillCategory.DISCIPLINE,
                                    'bg-brown-200': skill.category === SkillCategory.CRAFT,
                                    'bg-gray-400': skill.category === SkillCategory.PERFORMING_ARTS,
                                    'bg-white-100': skill.name !== activeFilter && activeFilter !== null
                                }
                            )}
                               onClick={() => {
                                   setFilteredExperiences(skill.experienceIDs)
                                   setActiveFilter(skill.name)
                               }} //TODO: When a skill filters the active description out, change selected experience to first in shown list
                            >
                                {skill.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}