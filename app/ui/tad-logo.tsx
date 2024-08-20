import { plaster } from "@/app/ui/fonts";
import TADIcon from "@/app/lib/TADIcon";


export default function TadLogo({
    text,
    width,
    height,
                                }: {
    text: string,
    width: number,
    height: number,
}) {
    return (
        <div
            className={`${plaster.className} flex flex-row items-center leading-none text-white-100`}
        >
            <TADIcon width={width} height={height}/>
            <p className={`text-[${text}px]`}>Trevor DePew</p>
        </div>
    );
}