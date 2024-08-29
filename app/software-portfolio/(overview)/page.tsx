import { Suspense } from 'react';
import { AboutSkeleton } from "@/app/ui/skeletons"
import SWPortfolioSection from "@/app/ui/software-portfolio/section"

export default function Page() {
    return (
        <>
            <Suspense fallback={<AboutSkeleton />}>
                <SWPortfolioSection />
            </Suspense>
        </>
    )
}