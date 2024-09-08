import { workExperience } from "@/app/ui/software-portfolio/utils/work-experience"
import { inter } from "@/app/ui/fonts"

// {skillName: ["exp1.name", "exp2.name", "exp3.name"]}
type SkillExperience = Map<string, string[]>

// TODO: Currently creates a new map for each skill - probably because it's not checking values, it's checking place in memory for each map and so each one is unique and therefore does not exist
function skillListBuilder() {
    let skillSet = new Set<SkillExperience>();

    workExperience.map((experience) => {
        let experiences:string[] = [experience.name]
        experience.skills.map((skill) => {
            let skillMap: Map<string, string[]> = new Map<string, string[]>;
            if (!skillSet.has(skillMap)) {
                skillMap.set(skill, [...experiences])
                skillSet.add(skillMap);
            } else {
                skillSet.forEach((skillMap) => {
                    skillMap.set(skill, [...experiences])
                })
            }
        });
    });
    return skillSet;
}

export default function SkillFilter() {
    let skillList = skillListBuilder();
    let skillListArray = Array.from(skillList);

    return (
        skillListArray.map((skill, i) => {
            return (
                <div key={i}>
                    <p>{skill}</p>
                </div>
            )
        })
    );
}

// {
//      skill1: ["exp1.name", "exp2,name"],
//      skill2: ["exp2.name", "exp3.name"],
//      skill3: ["exp1.name", "exp5.name"],
//  }