import { HeroImage } from "@/app/lib/definitions";

const heroImages: HeroImage[] = [
    {id: "1", name: "avatar 1", src: "/robo_avatar1.png", width: 303, height: 378, alt: "Robot Avatar 1"},
    {id: "2", name: "avatar 2", src: "/robo_avatar2.png", width: 303, height: 379, alt: "Robot Avatar 2"},
    {id: "3", name: "avatar 3", src: "/robo_avatar3.png", width: 303, height: 387, alt: "Robot Avatar 3"},
    {id: "4", name: "avatar 4", src: "/robo_avatar4.png", width: 303, height: 364, alt: "Robot Avatar 4"},
    {id: "5", name: "avatar 5", src: "/robo_avatar5.png", width: 320, height: 406, alt: "Robot Avatar 5"},
    {id: "6", name: "avatar 6", src: "/robo_avatar6.png", width: 328, height: 376, alt: "Robot Avatar 6"},
];

export const heroImagePicker = () => {
    const randInt = Math.ceil(Math.random() * 10)
    if (randInt < 7) {
        return heroImages[randInt];
    } else {
        return heroImages[1];
    }
};