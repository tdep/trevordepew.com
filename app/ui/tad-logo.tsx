import { plaster } from "@/app/ui/fonts";
import Image from 'next/image';

export default function TadLogo() {
    return (
        <div
            className={`${plaster.className} flex flex-row items-center leading-none text-white-100`}
        >
            <Image
                src={"/tad-inline.svg"}
                height={"200"}
                width={"200"}
                alt={"Website Logo Icon"}
            ></Image>
            <p className={"text-[144px]"}>Trevor DePew</p>
        </div>
    );
}