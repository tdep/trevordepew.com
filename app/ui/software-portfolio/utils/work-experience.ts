// export type SkillExperiences = {
//     skill: string;
//     category: SkillCategory;
//     experiences: string[];
// };

// export const Experience = {
//     0: "BERRY_FARM",
//     1: "MUSICA",
//     2: "VIOLIN_TEACHER",
//     3: "BARNES_AND_NOBLE",
//     4: "STUYVESANT",
//     5: "ROLI",
//     6: "AROLLA",
//     7: "FLATIRON",
//     8: "SPOTIFY",
//     9: "SONGSHARE",
//     10: "LTM"
// }

export enum SkillCategory {
    LANGUAGE,
    FRAMEWORK,
    SOFT,
    METHOD,
    CONCEPT,
    TESTING,
    CLEAR
}

export type Skill = {
    name: string;
    category: SkillCategory;
    experienceID: number[];
}

export type ExperienceData = {
    id: number
    name: string;
    role: string;
    description: string[];
    date: string;
    skills: string[];
};

export const skillsList: Skill[] = [
    {
        name: "Test-1",
        category: SkillCategory.TESTING,
        experienceID: [0, 1, 2, 3]
    },
    {
        name: "Test-2",
        category: SkillCategory.TESTING,
        experienceID: [1, 2, 4]
    },
    {
        name: "Test-3",
        category: SkillCategory.LANGUAGE,
        experienceID: [2, 3, 4, 5]
    },
    {
        name: "Test-4",
        category: SkillCategory.FRAMEWORK,
        experienceID: [5, 6, 7, 8]
    },
    {
        name: "Test-5",
        category: SkillCategory.SOFT,
        experienceID: [5]
    },
    {
        name: "Test-6",
        category: SkillCategory.SOFT,
        experienceID: [7, 8]
    },
]

export const workExperience: ExperienceData[] = [
    {
        id: 0,
        name: "The Berry Farm",
        role: "Farm Hand",
        description: [
            "Performed a variety of tasks during building renovations including: demolition, framing, paint removal, and application while maintaining safe working practices and environments.",
            "Operated and worked around large machinery to perform a variety of farm tasks such as plowing, tilling, hole drilling, digging, towing, and mowing.",
            "Carried out a multitude of regular farm tasks such as planting, pruning,harvesting, weed control, fertilizing, and irrigation building while making sure to use the latest and most effective processes yielding the best crops."
        ],
        date: "2004-2013",
        skills: ["Test-1"],
    },
    {
        id: 1,
        name: "Musica",
        role: "Administrative Assistant",
        description: [
            "Assisted in minor and major instrument repairs and setup of new instruments in order to maintain a quick turnaround to customers as well as maintain a full stock of high-quality new and used instruments.",
            "Assisted in setup and running of lights and sound for music performances to ensure smooth operations and ideal conditions for performers and audience members.",
            "Photographed concert events to create an archive of performances for future advertisements and for performers to have a record of events they participated in."
        ],
        date: "2006-2013",
        skills: ["test-1", "test-2"],
    },
    {
        id: 2,
        name: "Self Employed",
        role: "Violin Instructor / Music Teacher",
        description: [
            "Created and taught lessons in music theory, violin, and mandolin to amateurs and intermediate players from age 5 to 65 both individually and in groups."
        ],
        date: "2006-2013",
        skills: ["test-1", "test-2", "test-3"],
    },
    {
        id: 3,
        name: "Barnes & Noble",
        role: "Bookseller",
        description: [
            "Organize and stock CD and DVD merchandise in the music department to ensure section cleanliness and easiest access.",
            "Place customer requested orders of merchandise in the store computer system when items were out of stock or not typically sold in order to retain repeat customers.",
            "Operated POS machines during high volume times in order to help keep customer flow in the department.",
            "Coordinated with security when suspicious activity occurred while attempting to catch and thwart \"shrinkage\".",
            "Updated customer memberships and shipping information in store computer system to reduce mistakes in custom orders and maintain customer profiles."
        ],
        date: "2013-2014",
        skills: ["test-1", "test-3"]
    },
    {
        id: 4,
        name: "Stuyvesant High School",
        role: "Theater Technician / Instrument Repair",
        description: [
            "Built and led the theater tech program creating safety protocols and workshops on theater procedure and communication aimed at teaching students how to work in a hazardous and dynamic environment.",
            "Cataloged nearly 200 school-owned string instruments in poor condition and performed repairs such as restrings, soundpost setting, and re-gluing, allowing them to be used by students without their own instruments.",
            "Outlined a budget and plan-of-action for future repairs and organization of school-owned string instruments with plans to incorporate workshops on instrument care for students."
        ],
        date: "2016-2017",
        skills: ["test-2", "test-3"]
    },
    {
        id: 5,
        name: "Roli",
        role: "Creator Support Agent / Repair Technician",
        description: [
            "Designed and implemented a system to track and catalog product shipments and returns using Google Sheets and Google Docs significantly reducing the turnover period of returns from 5 weeks to 2 weeks and reducing lost shipments from 4% to 1%.",
            "Coordinated between Tech Support, Sales, Logistics, and Package Carriers in order to provide a smooth transaction for customers by providing accurate updates using the aforementioned cataloging system and reducing interdepartmental lead times from 5 to 2 business days.",
            "Created documentation and project description outlining the returns process and how it should continue to expand in order to provide a guideline for a future RMA system and returns department.",
            "Initiated and performed repairs of MIDI instruments in New York reducing the turnaround for faulty products within the US and Canada from 8 weeks to 2 weeks."
        ],
        date: "2017-2018",
        skills: ["test-3"]
    },
    {
        id: 6,
        name: "Arolla Piano Co.",
        role: "Piano Technician",
        description: [
            "Provided piano tuning, regulation and repair services to an average of 10 clients a week using electronic and ear techniques with standard piano tuning and repair tools in order to bring their instrument to its designed specs, allowing it to sound its best, and resolve or prevent performance issues in client pianos.",
            "Maintained a database of clients as well as payment and invoicing tooling using Google Sheets, Xero invoicing, and Square payments in order keep track of client service records, payments, and future service needs."
        ],
        date: "2019-2020",
        skills: []
    },
    {
        id: 7,
        name: "Flatiron School",
        role: "Student",
        description: [],
        date: "2022-2023",
        skills: ["Web Design", "CSS", "HTML", "JavaScript", "OOP", "Frontend Web Development", "Backend Web Development", "Ruby on Rails", "Python", "React.js", "Flask"]
    },
    {
        id: 8,
        name: "Spotify",
        role: "Java Backend Engineer",
        description: [
            "Wrote Java backend services and server-side clients, delivering user-specific query results and curated playlists via gRPC requests, reducing load times by 40% compared to the alternative RESTful service.",
            "Implemented new gRPC services with pagination using Protobuf serialization to replace existing RESTful services providing endpoints covering read/write functionality in a production service resulting in a reduction of client request loading times by 60%.",
            "Constructed robust validation mechanisms through Mockito and Docker test containers, preventing erroneous database queries and empty responses, which led to a 30% decrease in backend API exceptions and improved data integrity.",
            "Designed and refined new Next.JS Backend For Frontend(BFF) services, optimizing request processing and incorporating pagination, which boosted frontend client performance and reduced response times by 50-60%."
        ],
        date: "2023-2024",
        skills: ["Java", "Maven", "Unit Testing", "OOP", "GKE", "Protcol Buffers", "Backend Web Development", "Frontend Web Development", "Docker", "gRPC", "Integration Testing", "REST APIs", "Pair Programming", "TypeScript", "Next.js"]
    },
    {
        id: 9,
        name: "SongShare",
        role: "Backend Engineer",
        description: [
            "Developed a scalable REST API database schema and optimized data flows across external APIs and frontend clients, achieving a 50% improvement in data synchronization speed and a 15% reduction in server load.",
            "Architected a secure Python-based Django REST API with RBAC and JWT tokens, aligning with stakeholder requirements, enhancing user experience and service admin efficiency by 35%, while ensuring industry best practice compliance.",
            "Investigated and compiled essential features and user stories, creating a well-documented database schema; enabled a 25% increase in project delivery speed by fostering better team collaboration and Agile practices."
        ],
        date: "May-June 2024",
        skills: ["Python", "Django", "Django REST Framework", "SQLite", "JWT"]
    },
    {
        id: 10,
        name: "Lifting The Mood",
        role: "Software Engineer",
        description: [
            "Provided engineering expertise using knowledge of best practices and common design patterns to prototype and create a website wireframe streamlining design phase by 3 weeks.",
            "Incorporated stakeholder goals in project planning to design a user interface with a focus on delivering positive experience and capturing sales."
        ],
        date: "June 2024 - present",
        skills: ["UX", "Design", "Project Planning", "Wireframe", "SEO"]
    },
];