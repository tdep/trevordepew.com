import NavLinks, { HomeLogoNav, ScrollToTop } from "@/app/ui/portfolio/nav-links"
import { BackwardIcon } from "@heroicons/react/24/outline";
import { goBack } from '@/app/lib/actions'

export default function SideNav() {

    return (
        <div className={"flex h-full flex-col fixed px-3 py-4 border-r-2 border-black lg:px-2"}>
            <HomeLogoNav />
            <div className={"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2"}>
                <NavLinks />
                <div className={"hidden lg:flex items-end h-auto w-full grow rounded-md bg-gray-300 "}>
                    <ScrollToTop />
                </div>
            </div>
        </div>
    );
}