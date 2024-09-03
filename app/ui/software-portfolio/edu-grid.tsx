import clsx from "clsx"

type EduData = {
    school: string,
    degree: string,
    completion: string,
}

const eduDataList: EduData[] = [
    {
        school: "CUNY Brooklyn College",
        degree: "M.S. Computer Science",
        completion: "May 2026"
    },
    {
        school: "Spotify Technical Fellowship",
        degree: "Backend Java Engineering",
        completion: "Feb 2024"
    },
    {
        school: "Flatiron School",
        degree: "Software Engineering",
        completion: "Feb 2023"
    },
    {
        school: "CUNY Brooklyn College",
        degree: "M.M. Music Composition",
        completion: "May 2019"
    },
    {
        school: "SUNY New Paltz",
        degree: "B.S. Music Theory & Composition",
        completion: "May 2013"
    },
];

// TODO: fix display for smaller screens
export default function EduGrid() {
    return (
        <div className={"flex flex-col text-center"}>
            <p>Education</p>
            <table className={"border-collapse w-full border-2 border-black shadow-section-2d-small"}>
                <tbody>
                    {eduDataList.map((edu, i) => {
                        return (
                            <tr
                                key={i}
                                className={clsx('table-row text-sm text-justify',
                                    {
                                        'border-t border-gray-700': i !== 0,
                                    }
                                )}
                            >
                                <td className={"p-0 pl-1"}>{edu.school}</td>
                                <td className={"p-0 pl-1"}>{edu.degree}</td>
                                <td className={"p-0 pl-1"}>{edu.completion}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}