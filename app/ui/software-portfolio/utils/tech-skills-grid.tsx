import clsx from "clsx"
import { inter } from "@/app/ui/fonts"

const techSkills: string[] = [
    "Java", "Python", "TypeScript", "JavaScript", "React", "Tailwind", "PostgreSQL",
]

export default function TechSkillsGrid() {
    return (
        <>
            {/* Mobile */}
            <div className={"grid grid-cols-3 lg:hidden w-full justify-between m-1"}>
                <div className={"flex items-center mr-2"}>
                    <p>Skills:</p>
                </div>
                <div className={"col-span-2 grid grid-cols-2 gap-x-1 ml-2"}>
                    {techSkills.map((skill, i) => {
                        return (
                            <div
                                key={i}
                                className={`${inter.className} text-sm`}
                            >
                                {skill}
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Desktop */}
            <div className={"hidden lg:flex flex-col text-center"}>
                <p className={"md:text-2xl"}>Tech Skills</p>
                <div className={"border-2 border-black shadow-section-2d-small"}>
                    <div className={"grid grid-cols-3 gap-1 justify-items-center m-1"}>
                        {techSkills.map((skill, i) => {
                            return (
                                <p
                                    key={skill}
                                    className={clsx(
                                        'flex flex-row items-center justify-between md:text-lg',
                                        {
                                            'border-t': i !== 0
                                        },
                                    )}
                                >
                                    {skill}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}