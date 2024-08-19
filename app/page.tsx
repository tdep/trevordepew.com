import Link from "next/link";
import TadLogo from "@/app/ui/tad-logo";
import { sansita } from '@/app/ui/fonts'
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
      <main className={"flex min-h-screen flex-col p-6"}>
        <div className={"flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"}>
          <TadLogo />
        </div>
        <div className={"mt-4 flex grow flex-col gap-4 md:flex-row"}>
          <div className={"flex flex-col justify-center gap-6 rounded-lg bg-gray-100 px-6 py-10 md:w-2/5 md:px-20"}>
              <p className={` ${sansita.className} text-xl text-black md:text-3xl md:leading-normal`}>
                  <strong>Welcome to my website.</strong> This is the home for all of my work, have a look around!
              </p>
              <ol>
                  <Link
                      // href={"/software-portfolio"}
                      href={"https://www.trevordepew.com/portfolio"}
                      target={"_blank"}
                      className={"mt-1 mb-1 flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-xl font-medium text-white-100"}>
                      <span>Software Engineering Portfolio</span> <ArrowRightIcon className={"w-5 md:w-6"} />
                  </Link>
                  <Link
                      // href={"/composer-portfolio"}
                      href={"https://tadepewmusic.com"}
                      target={"_blank"}
                      className={"mt-1 mb-1 flex items-center gap-5 self-start rounded-lg bg-seagreen-500 px-6 py-3 text-xl font-medium text-white-100"}>
                      <span>Composer Portfolio</span> <ArrowRightIcon className={"w-5 md:w-6"} />
                  </Link>
                  <Link
                      // href={"/woodworker-portfolio"}
                      href={"https://tdepewmusic.wixsite.com/tdepewmusic"}
                      target={"_blank"}
                      className={"mt-1 mb-1 flex items-center gap-5 self-start rounded-lg bg-pomegranate-500 px-6 py-3 text-xl font-medium text-white-100"}>
                      <span>Woodworking Portfolio</span> <ArrowRightIcon className={"w-5 md:w-6"} />
                  </Link>
              </ol>
          </div>
          <div className={"flex items-center justify-center p-6 md: w-3/5 md:px-28 md:py-12"}>
            {/* Add Hero Images / Slideshow here! */}
          </div>
        </div>
      </main>
  );
}