import { DescriptionFilterProps } from "@/app/ui/software-portfolio/software-experience"
import { workExperience } from "@/app/ui/software-portfolio/utils/experience/work-experience"
import clsx from "clsx"

// TODO: When an experience is highlighted, highlight only the applicable skills too
export default function ExperienceList({ filteredExperiences, selectedExperience, setDescription }: DescriptionFilterProps) {

    function filterExperience(experienceId: number):boolean {
        return filteredExperiences.includes(experienceId);
    }

    return (
        <>
            {/* Desktop*/}
            <div className={"hidden lg:grid grid-cols-1 gap-2"}>
                {workExperience.toReversed().map((experience) => {
                    return (
                        <div
                            key={experience.id}
                            className={clsx(
                                'flex h-12 justify-items-center items-center overflow-hidden text-nowrap border-2 border-black',
                                {
                                    'hidden': !filterExperience(experience.id),
                                    'bg-belize-300': experience.id === selectedExperience,
                                    'hover:bg-carrot-300 hover:cursor-pointer': experience.id !== selectedExperience
                                }
                            )}
                            onClick={() => {
                                setDescription(experience.id)
                            }}
                        >
                            <p className={`text-2xl ml-3`}>{experience.name}</p>
                        </div>
                    )
                })}
            </div>

            {/* Mobile */}
            <div className={"flex lg:hidden flex-row mx-1 border-2 border-black shadow-section-2d-small overflow-x-scroll"}>
                {workExperience.toReversed().map((experience) => {
                    return (
                        <div
                            key={experience.id}
                            className={clsx(
                                'flex h-12 justify-items-center items-center text-nowrap m-1 border-[1px] border-black shadow-button-inner',
                                {
                                    'hidden': !filterExperience(experience.id),
                                    'bg-carrot-200': experience.id !== selectedExperience,
                                    'bg-belize-300': experience.id === selectedExperience,
                                    'ml-1': experience.id !== workExperience.length - 1,
                                    'mr-1': experience.id !== 0
                                }
                            )}
                            onClick={() => {
                                setDescription(experience.id)
                            }}
                        >
                            <p className={`text-xl mx-3`}>{experience.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}