'use client';

import { useEffect, useState } from "react"

export default function SoftwareFooter() {
    const emojis: string[] = ["😂", "😍", "✨", "🌈", "🍙", "🍜", "🐻"];
    const [madeWith, setMadeWith] = useState<number>(1);

    function getRandomInt(min:number, max:number) {
        const minCeil = Math.ceil(min);
        const maxFloor = Math.floor(max);
        return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
    }

    useEffect(() => {
        setMadeWith(getRandomInt(0, emojis.length))
    }, []);

    return (
        <div className={'relative w-full overflow-hidden md:col-span-4 shadow-section-2d'}>
            <div className={"bg-gray-300 border-4 border-black"}>
                <div className={"flex flex-col justify-center gap-4 mt-0 h-[20vh] bg-white-100 text-2xl text-center"}>
                    <p>Created with {emojis[madeWith]} by Trevor DePew ©2024</p>
                    <p>Built using <a className={"text-amethyst-500 lg:hover:text-blue-500 underline"} href={"https://stylestage.dev/styles/stageos/"} target={"_blank"}>Next.js</a> and deployed using <a className={"text-amethyst-500 lg:hover:text-blue-500 underline"} href={"https://vercel.com/"} target={"_blank"}>Vercel</a>.</p>
                    <p>Styling based on original stylesheet by <a className={"text-amethyst-500 lg:hover:text-blue-500 underline"} href={"https://stylestage.dev/styles/stageos/"} target={"_blank"}>Håvard Brynjulfsen</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}