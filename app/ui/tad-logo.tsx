import { plaster } from "@/app/ui/fonts";

export default function TadLogo() {
    return (
        <div
            className={`${plaster.className} flex flex-row items-center leading-none text-white-100`}
        >
            <p className={"text-[144px]"}>Trevor DePew</p>
        </div>
    );
}