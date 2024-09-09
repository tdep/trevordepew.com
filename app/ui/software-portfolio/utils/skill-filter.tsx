import { SkillCategory, skillsList } from "@/app/ui/software-portfolio/utils/work-experience"
import { SetStateAction, Dispatch } from "react"
import { inter } from "@/app/ui/fonts"
import clsx from "clsx"

type FilterProps = {
    filter: SkillCategory,
    onSelect: Dispatch<SetStateAction<SkillCategory>>
}

export default function SkillFilter({ filter, onSelect }: FilterProps) {

    return(
        <div className={"grid grid-cols-12 gap-1 justify-items-center"}>
            <div className={"w-20 overflow-hidden text-nowrap"}>
                <p
                    className={"text-sm text-center border-2 border-black rounded-lg p-1 bg-gray-600 hover:bg-gray-800"}
                    onClick={() => {onSelect(6)}}
                >
                    Clear Filter
                </p>
            </div>

            {skillsList.map((skill) => {
                return(
                    <div
                        key={skill.name}
                        className={clsx(
                            'w-20 overflow-hidden text-nowrap',
                            {
                                'border-2 border-emerald-200': filter === 6,
                                'border-2 border-black': filter === 0,
                                'border-2 border-blue-500': filter === 5
                            }
                        )}
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
                           onClick={() => {onSelect(skill.category)}}
                        >{skill.name}</p>
                    </div>
                );
            })}
        </div>
    );
}