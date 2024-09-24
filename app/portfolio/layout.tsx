import SideNav from '@/app/ui/sideNav';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={"flex h-screen flex-col overflow-y-scroll md:flex-row"}>
            <div className={"w-full flex-none md:w-64"}>
                <SideNav />
            </div>
            <div id={"software-top"} className={"flex-grow p-6 md:overflow-y auto md:p-12"}>{children}</div>
        </div>
    );
}