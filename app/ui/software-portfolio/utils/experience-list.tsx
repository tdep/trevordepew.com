import { FilterProps } from "@/app/ui/software-portfolio/software-experience"
import { workExperience } from "@/app/ui/software-portfolio/utils/work-experience"
import clsx from "clsx"
import { inter } from "@/app/ui/fonts"

export default function ExperienceList({ filter, onSelect }: FilterProps) {

    function filterExperience(experienceId: number):boolean {
        return filter.includes(experienceId);
    }

    return (
        <div className={"flex flex-col h-full border-2 border-emerald-300"}>
            {workExperience.map((experience) => {
                return(
                    <div
                        key={experience.id}
                        className={clsx(
                            'overflow-hidden text-nowrap text-center border-2 border-gray-700 bg-gray-400',
                            {
                                'hidden': !filterExperience(experience.id)
                            }
                        )}
                    >
                        <p
                            className={`text-xl `}
                        >{experience.name}</p>
                    </div>
                )
            })}
        </div>
    );
}