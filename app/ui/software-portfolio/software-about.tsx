import Image from "next/image"
import TechSkillsGrid from "@/app/ui/software-portfolio/tech-skills-grid"
import EduGrid from "@/app/ui/software-portfolio/edu-grid"

export default function SoftwareAbout() {
    // TODO: Might need to adjust slightly for laptop 1024px but otherwise looks good
    return (
        <div className={"bg-white-100 m-4 mt-2 lg:m-8"}>
            <div className={"flex flex-col items-start w-full leading-none text-center"}>
                <p className={"text-7xl"}>Trevor DePew</p>
                <p className={"text-5xl hidden lg:block"}>Software Engineer</p>
            </div>
            {/*Mobile Portrait*/}
            <div className={"flex items-center justify-center md:hidden"} >
                <Image
                    src={"/profile_trevor.png"}
                    width={250}
                    height={250}
                    className={"border-2 border-black shadow-section-2d-small"}
                    alt={"Portrait of Trevor DePew, Software Engineer"}
                />
            </div>
            <div className={"flex flex-col w-full items-start mt-4 mb-1 lg:border-b-2 lg:border-b-black"}>
                <div>
                    {/*Desktop Portrait*/}
                    <Image
                        src={"/profile_trevor.png"}
                        width={250}
                        height={250}
                        className={"hidden md:inline float-end ml-4 mb-4 border-2 border-black shadow-section-2d-small md:w-96"}
                        alt={"Portrait of Trevor DePew, Software Engineer"}
                    />
                    <div className={"flex lg:hidden flex-col border-2 border-black shadow-section-2d-small mb-4"}>
                        <div className={"w-full mb-2"}>
                            <EduGrid />
                        </div>
                        <div className={"mb-2 border-t-2 border-t-black"}>
                            <TechSkillsGrid />
                        </div>
                    </div>
                    <p className={"text-lg text-justify mb-1 lg:mb-3 lg:text-xl lg:w-3/5"}>
                        I am a <strong>Full Stack Software Engineer</strong> with a passion for solving problems
                        about human behavior and its relationship with the natural and urban environments from
                        infrastructure to climate and points between.
                    </p>
                    <p className={"text-lg text-justify mb-1 lg:mb-3 lg:text-xl lg:w-3/5"}>
                        I have a core belief that truth and honesty with ourselves and each other is the best way to
                        create an environment filled with meaningful and productive relationships.
                    </p>
                    <p className={"text-lg text-justify mb-1 lg:mb-3 lg:text-xl lg:w-3/5"}>
                        Apart from my academic pursuits in classical composition and performance, I have worked as a
                        technical support agent, piano technician, theater technician, and farmer.
                    </p>
                    <p className={"text-lg text-justify mb-1 lg:mb-3 lg:text-xl lg:w-3/5"}>
                        My previous career pursuits have led me through a healthy number of varied experiences which
                        have in turn given me a well-rounded set of skills that I use to broaden my perspective as a
                        software engineer.
                    </p>
                </div>
            </div>

            {/* Desktop */}
            <div className={"hidden lg:grid grid-cols-3 justify-items-center mb-2"}>
                <div className={"w-full col-span-2"}>
                    <EduGrid />
                </div>
                <div>
                    <TechSkillsGrid />
                </div>
            </div>
        </div>
    );
}