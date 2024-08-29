// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/100 before:to-transparent';

export function LandingSkeleton() {
    return (
        <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
            <div className={"rounded-xl bg-gray-300 p-4"}>
                <div className={"mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4"} />
                <div className={"flex items-center pb-2 pt-6"}>
                    <div className={"h-5 w-5 rounded-full bg-gray-500"} />
                    <div className={"ml-2 h-4 w-20 rounded-md bg-gray-500"} />
                </div>
            </div>

        </div>

    )
}

export function AboutSkeleton() {
    return (
        <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4 shadow-section-2d-skeleton`}>
            <div className={"bg-gray-300 border-4 border-gray-500"}>
                <div className={"mt-0 grid h-[80px] grid-cols-3 justify-items-end gap-2 bg-gray-300 border-b-4 border-gray-500 p-2"} >
                    <div className={"col-end-4 flex items-center p-2"}>
                        <div className={"h-6 w-6 rounded-full bg-white-100 mr-1 border-4 border-gray-500"} />
                        <div className={"h-6 w-6 rounded-full bg-white-100 ml-1 border-4 border-gray-500"} />
                    </div>
                </div>
                <div className={"mt-0 h-[80vh] bg-white-100"}>
                </div>
            </div>
        </div>
    );
}