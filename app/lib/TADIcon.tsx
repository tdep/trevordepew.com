import Image from "next/image";

export default function TADIcon({
    width,
    height,
                                }: {
    width: number,
    height: number,
}) {
    return (
        <Image
            src={"/tad-inline.svg"}
            width={width}
            height={height}
            alt={"Website Logo Icon"}
        />
    )
}