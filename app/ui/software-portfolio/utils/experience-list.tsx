import { DescriptionFilterProps } from "@/app/ui/software-portfolio/software-experience"
import { workExperience } from "@/app/ui/software-portfolio/utils/work-experience"
import clsx from "clsx"
import { inter } from "@/app/ui/fonts"

export default function ExperienceList({ filter, setFilter, selectedExperience, setDescription }: DescriptionFilterProps) {

    function filterExperience(experienceId: number):boolean {
        return filter.includes(experienceId);
    }

    return (
        <div className={"grid grid-cols-1 gap-2"}>
            {workExperience.toReversed().map((experience) => {
                return(
                    <div
                        key={experience.id}
                        className={clsx(
                            'flex h-12 justify-items-center items-center overflow-hidden text-nowrap border-2 border-black',
                            {
                                'hidden': !filterExperience(experience.id),
                                'bg-belize-300': experience.id === selectedExperience,
                                'hover:bg-amethyst-300 hover:cursor-pointer': experience.id !== selectedExperience
                            }
                        )}
                        onClick={() => {setDescription(experience.id)}}
                    >
                        <p className={`text-2xl ml-3`}>{experience.name}</p>
                    </div>
                )
            })}
        </div>
    );
}