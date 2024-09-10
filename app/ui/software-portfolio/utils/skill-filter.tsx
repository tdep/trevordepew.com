import { SkillCategory, skillsList } from "@/app/ui/software-portfolio/utils/work-experience"
import { DescriptionFilterProps } from "@/app/ui/software-portfolio/software-experience"
import { inter } from "@/app/ui/fonts"
import clsx from "clsx"



export default function SkillFilter({ filter, setFilter }: DescriptionFilterProps) {
    //TODO: set visual feedback for button clicks
    return(
        <div className={"grid grid-cols-12 gap-1 justify-items-center"}>
            <div className={"w-20 overflow-hidden text-nowrap"}>
                <p
                    className={"text-sm text-center border-2 border-black rounded-lg p-1 bg-gray-600 hover:bg-gray-800 hover:cursor-pointer"}
                    onClick={() => {setFilter([0,1,2,3,4,5,6,7,8,9,10])}} //TODO: see software-experience
                >
                    Clear Filter
                </p>
            </div>

            {skillsList.map((skill) => {
                return(
                    <div
                        key={skill.name}
                        className={'w-20 overflow-hidden text-nowrap'}
                    >
                        <p className={clsx(
                            `${inter.className} text-[12px] text-center border-2 border-black rounded-lg p-1 hover:bg-white-100 hover:text-black hover:cursor-pointer`,
                            {
                                'bg-pomegranate-300': skill.category === SkillCategory.TESTING,
                                'bg-belize-300': skill.category === SkillCategory.LANGUAGE,
                                'bg-yellow-300': skill.category === SkillCategory.SOFT,
                                'bg-carrot-300': skill.category === SkillCategory.FRAMEWORK
                            }
                        )}
                           onClick={() => {setFilter(skill.experienceIDs)}}
                        >
                            {skill.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}