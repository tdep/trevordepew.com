import { workExperience } from "@/app/ui/software-portfolio/utils/experience/work-experience"
import clsx from "clsx"
import { DescriptionFilterProps } from "@/app/ui/software-portfolio/software-experience"
import { inter } from "@/app/ui/fonts"

export default function ExperienceDescriptions( { selectedExperience }: DescriptionFilterProps) {

    return (
        <div>
            {workExperience.map((experience) => {
                return(
                    <div
                        key={experience.id}
                    >
                        {experience.description.map((sentence, i) => {
                            return (
                                <p
                                    key={i}
                                    className={clsx(
                                        `${inter.className} text-md lg:text-2xl m-3 p-2 border-2 border-gray-600 bg-gray-200 shadow-section-2d-skeleton-small`,
                                        {
                                            'hidden': experience.id !== selectedExperience,
                                            'rounded-t-xl': i === 0,
                                            'rounded-b-xl': i === experience.description.length - 1
                                        }
                                    )}
                                >◈ {sentence}</p>
                            )
                        })}
                    </div>
                );
            })}
        </div>
    );
}