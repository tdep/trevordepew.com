import NavLinks, {HomeLogoNav} from '@/app/ui/portfolio/nav-links';
import { BackwardIcon } from "@heroicons/react/24/outline";
import { goBack } from '@/app/lib/actions'

export default function SideNav() {
    return (
        <div className={"flex h-full flex-col px-3 py-4 md:px-2"}>
            <HomeLogoNav />
            <div className={"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2"}>
                <NavLinks />
                <div className={"hidden h-auto w-full grow rounded-md bg-gray-400 md:block"}>
                    <form
                        action={async () => {
                            'use server';
                            await goBack();
                        }}
                    >
                        {/* Back Button*/}
                        <button
                            className={"flex h-[48px] w=full grow items-center justify-center gap-2 rounded-md bg-gray-400 p-3 text-xl font-medium hover:bg-seagreen-600 hover:text-white-100 md:flex-none md:justify-start md:p-2 md:px-3"}
                        >
                            <BackwardIcon className={"w-6"} />
                            <div className={"hidden md:block"}>Go Back</div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}