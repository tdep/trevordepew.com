import { ProjectData } from "@/app/ui/software-portfolio/utils/projects/projects"
import Image from "next/image"
import clsx from "clsx"
import { inter } from "@/app/ui/fonts"

export default function ProjectCard(project: ProjectData) {

    type ProjectComponentsProp = {
        thisProject: ProjectData;
    }

    const ProjectsTitleComponent = (props: ProjectComponentsProp) => {
        const {thisProject} = props;

        return (
            <div className={"leading-none flex flex-row justify-between w-full mb-4"}>
                <div>
                    <p className={"text-5xl"}>{thisProject.name}</p>
                </div>
                <div className={"flex flex-row justify-center"}>
                    {thisProject.links.map((link, i) => {
                        return (
                            <div
                                key={i}
                                className={"flex mx-2 justify-center border-2 border-black shadow-button-inner hover:bg-emerald-500 hover:cursor-pointer"}
                            >
                                <a
                                    href={link.address}
                                    target={"_blank"}
                                    className={"text-xl p-2"}
                                >{link.name}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const ProjectsImageDescriptionComponent = (props: ProjectComponentsProp) => {
        const {thisProject} = props;

        return (
            <div className={"flex flex-row p-3"}>
                <div className={"flex items-start w-full mr-4"}>
                    <Image
                        src={thisProject.image}
                        width={250}
                        height={250}
                        className={"border-2 border-black shadow-section-2d-small"}
                        alt={`Image of the ${thisProject.name} project.`}
                    />
                </div>

                <div>
                    {thisProject.description.map((sentence, i) => {
                        return (
                            <div
                                key={i}
                                className={"flex flex-col ml-4"}
                            >
                                <p
                                    className={clsx(
                                        `${inter.className} text-xl lg:text-2xl p-2 border-2 border-gray-600 bg-gray-200 shadow-section-2d-skeleton-small`,
                                        {
                                            'rounded-t-xl': i === 0,
                                            'mt-3': i > 0,
                                            'rounded-b-xl': i === project.description.length - 1
                                        }
                                    )}
                                >◈ {sentence}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }

    return (
        <div>
            <ProjectsTitleComponent thisProject={project} />
            <ProjectsImageDescriptionComponent thisProject={project} />
        </div>
    );
}