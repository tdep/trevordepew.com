export default function SWPortfolioSection() {
    return (
        <div className={`relative w-full overflow-hidden md:col-span-4 shadow-section-2d`}>
            <div className={"bg-gray-300 border-4 border-black"}>
                <div
                    className={"mt-0 grid h-[80px] grid-cols-3 justify-items-end gap-2 bg-pomegranate-500 border-b-4 border-black p-2"}>
                    <div className={"col-end-4 flex items-center p-2"}>
                        <div className={"h-6 w-6 rounded-full bg-white-100 mr-1 border-4 border-black"} />
                        <div className={"h-6 w-6 rounded-full bg-white-100 ml-1 border-4 border-black"} />
                    </div>
                </div>
                <div className={"mt-0 h-[80vh] bg-white-100"}>
                </div>
            </div>
        </div>
    )
}