import NavLinks, { HomeLogoNav, ScrollToTop } from "@/app/ui/portfolio/nav-links"
import { BackwardIcon } from "@heroicons/react/24/outline";
import { goBack } from '@/app/lib/actions'

export default function SideNav() {

    return (
        <>
            {/* Desktop */}
            <div className={"hidden lg:flex h-full flex-col fixed px-3 py-4 border-r-2 border-black lg:px-2"}>
                <HomeLogoNav />
                <div className={"flex grow flex-row justify-between space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2"}>
                    <NavLinks />
                    <div className={"flex items-end h-auto w-full grow rounded-md bg-gray-300 "}>
                        <ScrollToTop />
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className={"fixed flex flex-row justify-between lg:hidden items-center w-full z-10 bg-white-100 border-b-2 border-black py-2"}>
                <NavLinks />
                <ScrollToTop />
            </div>
        </>
    );
}