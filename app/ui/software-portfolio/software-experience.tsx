import SkillFilter from "@/app/ui/software-portfolio/utils/skill-filter"

export default function SoftwareExperience() {
    return (
        <div className={"leading-none h-full bg-white-100 m-4 mt-2 lg:m-8"}>
            <div className={"flex flex-col items-start w-full text-center"}>
                <p className={"text-5xl mb-2"}>Work Experience</p>
                <p className={"w-full text-lg text-justify mb-1 mt-2 lg:text-xl"}>
                    I&apos;m lucky to have had a variety of work experiences over the years in all sorts of disciplines.
                    Many have aligned with passions but a few have been particularly poignant. I&apos;ve listed those
                    here.
                </p>
            </div>
            <div className={"h-full border-2 mt-4 border-black"}>
                <div className={"w-full flex justify-center m-1"}>
                    <div className={""}>
                        <SkillFilter />
                    </div>
                </div>
                <div className={"grid grid-cols-2"}>
                    <div className={""}>
                        <p>Experience List</p>
                    </div>
                    <div className={""}>
                        <p>Descriptions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}