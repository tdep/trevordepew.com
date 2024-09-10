import { workExperience } from "@/app/ui/software-portfolio/utils/work-experience"
import clsx from "clsx"
import { DescriptionFilterProps } from "@/app/ui/software-portfolio/software-experience"

export default function ExperienceDescriptions( { filter, setFilter, selectedExperience, setDescription }: DescriptionFilterProps) {

    return (
        <div>
            {workExperience.map((experience) => {
                return(
                    <div
                        key={experience.id}
                    >
                        <p
                            className={clsx(
                                'text-xl m-3',
                                {
                                    'hidden': experience.id !== selectedExperience
                                }
                            )}
                        >{experience.description}</p>
                    </div>
                )
            })}
        </div>
    )
}