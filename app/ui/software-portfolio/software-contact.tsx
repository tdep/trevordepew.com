import Link from "next/link"

export default function SoftwareContact() {
    // TODO: Refactor into components
    const linkClassNameLg = "flex flex-grow mx-2 text-2xl text-center justify-center items-center px-4 border-2 border-black shadow-button-inner-big hover:bg-blue-300 hover:cursor-pointer text-md p-1";
    const linkClassNameSm = "flex flex-grow mx-1 my-0.5 text-lg text-center justify-center items-center px-2 border-2 border-black shadow-button-inner text-md p-1";

    return (
        <div className={"flex flex-col bg-white-100 m-4 mt-2 lg:m-8"}>
            <div className={"flex flex-col items-start w-full leading-none my-1 lg:text-center lg:my-4"}>
                <p className={"text-5xl"}>Contact</p>
                <p className={"text-xl lg:text-2xl"}>Here are the ways you can contact me or see my work:</p>
            </div>

            {/* Desktop */}
            <div className={"hidden lg:grid grid-cols-5 gap-2 my-4 p-4 border-8 border-double border-black shadow-section-2d-small items-center"}>
                <div className={"mr-4"}>
                    <p className={"text-2xl text-center"}>Through these profiles:</p>
                </div>
                <div className={"flex flex-grow h-full"}>
                    <Link
                        className={linkClassNameLg}
                        href={"https://www.linkedin.com/in/trevor-depew/"}
                        target={"_blank"}
                    >
                        LinkedIn
                    </Link>
                </div>
                <div className={"flex flex-grow h-full"}>
                    <Link
                        className={linkClassNameLg}
                        href={"https://github.com/tdep"}
                        target={"_blank"}
                    >
                        GitHub
                    </Link>
                </div>
                <div className={"col-span-2"}/>

                <div className={"mx-4"}>
                    <p className={"text-2xl text-center"}>Through these other projects:</p>
                </div>
                <div className={"flex flex-grow h-full"}>
                    <Link
                        className={linkClassNameLg}
                        href={"https://soundcloud.com/t-depew"}
                        target={"_blank"}
                    >
                        Soundcloud
                    </Link>
                </div>
                <div className={"flex flex-grow h-full"}>
                    <Link
                        className={linkClassNameLg}
                        href={"https://tdepewmusic.wixsite.com/tdepewmusic"}
                        target={"_blank"}
                    >
                        TDP Instruments & Craft Works
                    </Link>
                </div>
                <div className={"flex flex-grow h-full"}>
                    <Link
                        className={linkClassNameLg}
                        href={"https://tadepewmusic.com/"}
                        target={"_blank"}
                    >
                        T.A.DePew Music
                    </Link>
                </div>
                <div className={"flex flex-grow h-full"}>
                    <Link
                        className={linkClassNameLg}
                        href={"https://www.youtube.com/channel/UCGVacZQUbCpGJcyAYkZZukA/featured"}
                        target={"_blank"}
                    >
                        YouTube
                    </Link>
                </div>
            </div>

            {/* Mobile */}
            <div className={"flex flex-col lg:hidden my-4 p-4 border-8 border-double border-black shadow-section-2d-small items-center"}>
                <div className={"w-full border-b-2 border-dotted border-black pb-4"}>
                    <p className={"text-xl text-center"}>Through these profiles:</p>
                    <div className={"flex flex-col h-full"}>
                        <Link
                            className={linkClassNameSm}
                            href={"https://www.linkedin.com/in/trevor-depew/"}
                            target={"_blank"}
                        >
                            LinkedIn
                        </Link>
                        <Link
                            className={linkClassNameSm}
                            href={"https://github.com/tdep"}
                            target={"_blank"}
                        >
                            GitHub
                        </Link>
                    </div>
                </div>

                <div className={"w-full pt-2"}>
                    <p className={"text-xl text-center"}>Through these other projects:</p>
                    <div className={"flex flex-col h-full"}>
                        <Link
                            className={linkClassNameSm}
                            href={"https://soundcloud.com/t-depew"}
                            target={"_blank"}
                        >
                            Soundcloud
                        </Link>
                        <Link
                            className={linkClassNameSm}
                            href={"https://tdepewmusic.wixsite.com/tdepewmusic"}
                            target={"_blank"}
                        >
                            TDP Instruments & Craft Works
                        </Link>
                        <Link
                            className={linkClassNameSm}
                            href={"https://tadepewmusic.com/"}
                            target={"_blank"}
                        >
                            T.A.DePew Music
                        </Link>
                        <Link
                            className={linkClassNameSm}
                            href={"https://www.youtube.com/channel/UCGVacZQUbCpGJcyAYkZZukA/featured"}
                            target={"_blank"}
                        >
                            YouTube
                        </Link>
                    </div>
                </div>
            </div>

            <div className={"flex my-4 items-center"}>
                <p className={"text-xl"}>Stay tuned for more things to come!</p>
            </div>
        </div>
    )
}