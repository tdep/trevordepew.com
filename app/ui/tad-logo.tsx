import { plaster } from "@/app/ui/fonts";
import TADIcon from '@/app/lib/TADIcon'
import Image from 'next/image';

export default function TadLogo() {
    return (
        <div
            className={`${plaster.className} flex flex-row items-center leading-none text-white-100`}
        >
            <TADIcon />
            <p className={"text-[144px]"}>Trevor DePew</p>
        </div>
    );
}