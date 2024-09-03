import clsx from "clsx"

const techSkills: string[] = [
    "Java", "Python", "TypeScript", "JavaScript", "React", "Tailwind", "PostgreSQL",
]

export default function TechSkillsGrid() {
    return (
        <div className={"flex flex-col text-center"}>
            <p>Tech Skills</p>
            <div className={"border-2 border-black shadow-section-2d-small"}>
                <div className={"grid grid-cols-3 gap-1 justify-items-center m-1"}>
                    {techSkills.map((skill, i) => {
                        return (
                            <p
                                key={skill}
                                className={clsx(
                                    'flex flex-row items-center justify-between',
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
    );
}