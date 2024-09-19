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
            <div className={""}>
                <p className={""}>{thisProject.name}</p>
                {thisProject.links.map((link, i) => {
                    return (
                        <div key={i}>
                            <a href={link.address}>{link.name}</a>
                        </div>
                    )
                })}
            </div>
        )
    }

    const ProjectsImageDescriptionComponent = (props: ProjectComponentsProp) => {
        const {thisProject} = props;

        return (
            <div className={"flex flex-row"}>
                <Image
                    src={thisProject.image}
                    width={200}
                    height={200}
                    className={"object-cover border-2 border-black shadow-section-2d-small"}
                    alt={`Image of the ${thisProject.name} project.`}
                />
                <div>
                    {thisProject.description.map((sentence, i) => {
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