import { ExperienceData, workExperience } from "@/app/ui/software-portfolio/utils/work-experience"
import { inter } from "@/app/ui/fonts"
import clsx from "clsx"

enum SkillCategory {
    LANGUAGE,
    FRAMEWORK,
    SOFT,
    METHOD,
    CONCEPT,
    TESTING
}
type SkillExperiences = {
    skill: string;
    category: SkillCategory;
    experiences: string[];
};


// TODO: Convert skillsList to list of SkillExperiences
export default function SkillFilter() {
    let skillsList: string[] = [];
    workExperience.map((experience) => {
        experience.skills.map((skill) => {
            if (!skillsList.includes(skill)) {
                skillsList.push(skill)
            }
        })
    })
    return(
        <div className={"grid grid-cols-12 gap-1 justify-items-center"}>
            {skillsList?.map((skill) => {
                return(
                    <div
                        key={skill}
                        className={"w-20 overflow-hidden text-nowrap"}
                    >
                        <p className={`${inter.className} text-[12px] text-center border-2 border-black rounded-lg p-1 hover:bg-belize-500 hover:text-white-100`}
                        >{skill}</p>
                    </div>
                );
            })}
        </div>
    );
}

// {
//      skill1: ["exp1.name", "exp2,name"],
//      skill2: ["exp2.name", "exp3.name"],
//      skill3: ["exp1.name", "exp5.name"],
//  }