import { projects } from "@/app/ui/software-portfolio/utils/projects/projects"
import Image from "next/image"
import clsx from "clsx"
import { inter } from "@/app/ui/fonts"

export default function ProjectCard() {
    return (
        <div>
            {projects.map((project) => {
                return (
                    <div
                        key={project.id}
                        className={"flex flex-row"}
                    >
                        <Image
                            src={project.image}
                            width={200}
                            height={200}
                            className={"object-cover border-2 border-black shadow-section-2d-small"}
                            alt={`Image of the ${project.name} project.`}
                        />
                        <div>
                            {project.description.map((sentence, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={"flex flex-col"}
                                    >
                                        <p
                                            className={clsx(
                                                `${inter.className} text-xl lg:text-2xl m-3 p-2 border-2 border-gray-600 bg-gray-200 shadow-section-2d-skeleton-small`,
                                                {
                                                    'rounded-t-xl': i === 0,
                                                    'rounded-b-xl': i === project.description.length - 1
                                                }
                                            )}
                                        >◈ {sentence}</p>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}