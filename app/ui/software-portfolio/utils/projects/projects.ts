type ProjectLink = {
    name: string;
    address: string;
};

export type ProjectData = {
    id: number;
    name: string;
    description: string[];
    links: ProjectLink[];
    image: string;
};
export const projects: ProjectData[] =[

    {
        id: 0,
        name: "TADLAB",
        description: [
            "This is my final project for the Flatiron School Software Engineering program that I finished in February of 2022.",
            "In it's current state, the application is not fully functional and serves more as a proof of concept for future projects.",
            "In previous projects, I would mainly focus on functionality and leave the styling for the end only to run out of time.",
            "For this project, I put a heavy emphasis on styling in order to learn more about CSS and improve the user experience."
        ],
        links: [
            {
                name: "GitHub",
                address: "https://github.com/tdep/tadlab"
            }
        ],
        image: "/project-images/tadlab.gif"
    },
    {
        id: 1,
        name: "Sequinzer-6001",
        description: [
            "The original Sequinzer 6001! I wasn't able to get the sequencer to sequence in this version, so I built a lite version (Sequinzer 6001-2a) which does actually sequence.",
            "This did wind up being a really good exercise in learning React, CSS, prototyping, and working with audio in the browser.",
            "I also managed to figure out how to build a functional rotary knob from scratch."
        ],
        links: [
            {
                name: "GitHub",
                address: "https://github.com/tdep/Sequinzer-6001"
            }
        ],
        image: "/project-images/sequinzer-6001.png"
    },
    {
        id: 2,
        name: "Sequinzer-6001-2a",
        description: [
            "It's the Sequinzer 6001, but improved! This is a Flatiron School Software Engineering project for phase 2 featuring React.js and Tone.js to create a software instrument capable of receiving a set pattern and playing it back to the user.",
            "My first attempt, (Sequinzer 6001) wasn't able to actually sequence, so I scaled back the project and build the Sequinzer 6001-2a.",
            "However, this version has a fatal flaw where the audio engine is not permitted enough time to buffer so after some time it loses the ability to produce sound.",
            "Future versions will address this and add other functionality."
        ],
        links: [
            {
                name: "GitHub",
                address: "https://github.com/tdep/Sequinzer-6001-2a"
            }
        ],
        image: "/project-images/sequinzer-6001-2a.gif"
    },
    {
        id: 3,
        name: "Webaudio-Synth",
        description: [
            "This is a simple oscillator controlled by MIDI intput in the browser using the Webaudio API that I built as a Flatiron School project.",
            "The goal was to be able to use an external MIDI device to control a web application and learn how to use the webaudio api in preperation for my final project for FI."
        ],
        links: [
            {
                name: "GitHub",
                address: "https://github.com/tdep/webaudio-synth"
            }
        ],
        image: "/project-images/web-synth.gif"
    },
    {
        id: 4,
        name: "Portfolio Website",
        description: [
            "This is the third iteration, the first was a build that I was working on to figure out what I wanted to do.",
            "The second was an app created using Vite and GitHub Pages, but I ran into a number of issues that were taking too much time.",
            "So we have this version using Create React App and Firebase! The focus was mainly to create a personalized website that gave a unique user experience.",
            "To that end, I built a little tele-viewer made primarily with CSS to show previous projects. It also used a lot of CSS properties to control how the tele-viewer and rest of the site displayed on a variety of devices/screen sizes.",
            "The color pallet was chosen to be higher contrast in order to help with accessibility."
        ],
        links: [
            {
                name: "v2-GitHub",
                address: "https://github.com/tdep/portfolio-site-v2"
            },
            {
                name: "v3-Client-GitHub",
                address: "https://github.com/tdep/tdep-tadlab-client"
            },            {
                name: "v3-API GitHub",
                address: "https://github.com/tdep/tdep-tadlab-api"
            },
            {
                name: "v4-GitHub",
                address: "https://github.com/tdep/trevordepew.com"
            },
            {
                name: "Demo",
                address: "https://www.trevordepew.com"
            }
        ],
        image: "/project-images/portfolio-v2.gif"
    },
]