import Link from "next/link";

export default function Page() {
  return (
      <main className={"flex min-h-screen flex-col p-6"}>
        <div className={"flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"}>
          {/* Some logo */}
        </div>
        <div className={"mt-4 flex grow flex-col gap-4 md:flex-row"}>
          <div className={"flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20"}>
              <p className={` ${""} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                  <strong>Welcome to Trevor DePew&apos;s website.</strong> This is the home for all of my work, have a look around!
              </p>
              <ol>
                  <Link
                      href={"/software-portfolio"}
                      className={"flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white"}>Software Engineering Portfolio
                  </Link>
                  <Link
                      href={"/composer-portfolio"}
                      className={"flex items-center gap-5 self-start rounded-lg lg-blue-500 px-6 py-3 text-sm font-medium text-white"}>Composer Portfolio
                  </Link>

                  <Link
                      href={"/woodworker-portfolio"}
                      className={"flex items-center gap-5 self-start rounded-lg lg-blue-500 px-6 py-3 text-sm font-medium text-white"}>Woodworking Portfolio
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