import clsx from "clsx";

type SectionProps = {
    sectionName: string;
    SectionContent: React.ReactElement;
}

// TODO: fix display for larger screens (more compact)
export default function SWPortfolioSection({
                                               sectionName,
                                               SectionContent,
} : SectionProps) {
    return (
        <div className={'relative w-full overflow-hidden md:col-span-4 shadow-section-2d'}>
            <div className={"bg-gray-300 border-4 border-black"}>
                <div
                    className={clsx(
                        "mt-0 grid h-[70px] grid-cols-3 justify-items-end gap-2 border-b-4 border-black p-2",
                        {
                            'bg-pomegranate-500': sectionName === 'about',
                            'bg-carrot-500': sectionName === 'experience',
                            'bg-emerald-500': sectionName === 'projects',
                            'bg-blue-500': sectionName === 'contact',
                        }

                    )}>
                    <div className={"col-end-4 flex items-center p-2"}>
                        <div className={"h-6 w-6 rounded-full bg-white-100 mr-1 border-4 border-black"} />
                        <div className={"h-6 w-6 rounded-full bg-white-100 ml-1 border-4 border-black"} />
                    </div>
                </div>
                <div className={"mt-0 h-[89vh] bg-white-100 overflow-y-scroll md:overflow-hidden"}>
                    <SectionContent.type />
                </div>
            </div>
        </div>
    )
}