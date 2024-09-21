'use client';

import { ProjectData } from "@/app/ui/software-portfolio/utils/projects/projects"
import Image from "next/image"
import clsx from "clsx"
import { inter } from "@/app/ui/fonts"
import { useState } from "react"


export default function ProjectCard(project: ProjectData) {
    const [enlargedImage, setEnlargedImage] = useState<boolean>(false);


    type ProjectComponentsProp = {
        thisProject: ProjectData;
    }

    const ProjectsTitleComponent = (props: ProjectComponentsProp) => {
        const {thisProject} = props;

        return (
            <>
                {/* Desktops */}
                <div className={"hidden lg:flex leading-none flex-row justify-between w-full mb-4"}>
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

                {/* Mobile */}
                <div className={"flex lg:hidden flex-col leading-none w-full items-center my-2"}>
                    <div>
                        <p className={"text-2xl"}>{thisProject.name}</p>
                    </div>
                    <div className={"grid grid-cols-2 gap-0.5 mt-2 justify-center"}>
                        {thisProject.links.map((link, i) => {
                            return (
                                <div
                                    key={i}
                                    className={"flex justify-center border-2 border-black shadow-button-inner"}
                                >
                                    <a
                                        href={link.address}
                                        target={"_blank"}
                                        className={"text-md p-1 text-nowrap"}
                                    >{link.name}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    }

    const ProjectImageComponent = (props: ProjectComponentsProp) => {
        const {thisProject} = props;

        return (
            <>
                {/* Desktops */}
                <div className={"hidden lg:block"}>
                    {/* Images enlarged */}
                    <div className={clsx("fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 z-50",
                            {
                                "hidden": !enlargedImage
                            }
                        )}
                    >
                        <Image
                            src={thisProject.image}
                            width={150}
                            height={150}
                            className={"w-1/2 border-2 border-black"}
                            alt={`Image of the ${thisProject.name} project.`}
                            onClick={() => setEnlargedImage(!enlargedImage)}
                        />
                    </div>
                    {/* Images normal */}
                    <div
                        className={clsx("col-span-1",
                            {
                                "hidden": enlargedImage,
                            },
                        )}
                        onClick={() => setEnlargedImage(!enlargedImage)}
                    >
                        {enlargedImage ?
                            <div className={"w-[250] aspect-square border-2 border-black bg-gray-400"} />
                            :
                            <Image
                                src={thisProject.image}
                                width={250}
                                height={250}
                                className={"w-full border-2 border-black aspect-square object-cover shadow-section-2d-small"}
                                alt={`Image of the ${thisProject.name} project.`}
                            />
                        }
                    </div>
                </div>

                {/* Mobile */}
                <div className={"block lg:hidden"}>
                    {/* Images enlarged */}
                    <div className={clsx("fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 z-50",
                            {
                                "hidden": !enlargedImage
                            }
                        )}
                    >
                        <Image
                            src={thisProject.image}
                            width={150}
                            height={150}
                            className={"w-full border-2 border-black"}
                            alt={`Image of the ${thisProject.name} project.`}
                            onClick={() => setEnlargedImage(!enlargedImage)}
                        />
                    </div>
                    {/* Images normal */}
                    <div
                        className={"flex items-center justify-center w-[50]"}
                        onClick={() => setEnlargedImage(!enlargedImage)}
                    >
                            <Image
                                src={thisProject.image}
                                width={250}
                                height={250}
                                className={"w-full border-2 border-black aspect-square object-cover shadow-section-2d-small"}
                                alt={`Image of the ${thisProject.name} project.`}
                            />
                    </div>
                </div>
            </>
        );
    }

    const ProjectsDescriptionComponent = (props: ProjectComponentsProp) => {
        const { thisProject } = props

        return (
            <>
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
            </>
        );
    }

    return (
        <>
            {/* Desktops */}
            <div className={"hidden lg:block"}>
                <ProjectsTitleComponent thisProject={project} />
                <div className={"grid grid-cols-3 p-3"}>
                    <div className={"col-span-1"}>
                        <ProjectImageComponent thisProject={project} />
                    </div>
                    <div className={"col-span-2"}>
                        <ProjectsDescriptionComponent thisProject={project} />
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className={"flex lg:hidden flex-col"}>
                <ProjectImageComponent thisProject={project} />
                <ProjectsTitleComponent thisProject={project} />
            </div>
        </>
    );
}