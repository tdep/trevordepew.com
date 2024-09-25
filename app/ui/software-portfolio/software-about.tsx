import Image from "next/image"
import TechSkillsGrid from "@/app/ui/software-portfolio/utils/about/tech-skills-grid"
import EduGrid from "@/app/ui/software-portfolio/utils/about/edu-grid"

export default function SoftwareAbout() {
    // TODO: Might need to adjust slightly for laptop 1024px but otherwise looks good
    return (
        <div id={"about"} className={"bg-white-100 m-4 mt-2 lg:m-8"}>
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
                        className={"hidden lg:inline float-end ml-4 mb-4 border-2 border-black shadow-section-2d-small md:w-96"}
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
                        I am a <strong>Software Engineer</strong> interested in how things work. From adding machines and
                        steam engines to languages and the theory of western classical music, and everywhere in-between.
                        I constantly seek to understand how the natural and synthetic worlds work.
                    </p>
                    <p className={"text-lg text-justify mb-1 lg:mb-3 lg:text-xl lg:w-3/5"}>
                        Currently, I am earning my <strong>Master&apos;s in Computer Science</strong> from CUNY Brooklyn
                        College where I am studying computer architecture, database system design and management, and more.
                        I hope to blend my study in CS with my previous Master&apos;s in Music Composition as I continue
                        working through my degree.
                    </p>
                    <p className={"text-lg text-justify mb-1 lg:mb-3 lg:text-xl lg:w-3/5"}>
                        Outside of computer programming and music composition, I have worked as a technical support agent,
                        piano technician, theater technician, photographer, carpenter, teacher, performer, and farmer.
                    </p>
                    <p className={"text-lg text-justify mb-1 lg:mb-3 lg:text-xl lg:w-3/5"}>
                        I believe that truth and honesty within ourselves and without is the best way to
                        create an environment filled with meaningful and productive relationships. Be sure to check out
                        my software projects and other works found by following the links throughout!
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