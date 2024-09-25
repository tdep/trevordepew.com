import Link from "next/link";
import TadLogo from "@/app/ui/tad-logo";
import { sansita, orbitron, rum } from "@/app/ui/fonts"
import { ArrowRightIcon, CodeBracketIcon, MusicalNoteIcon, PaintBrushIcon, BeakerIcon} from "@heroicons/react/24/outline"
import clsx from "clsx"
import TADIcon from "@/app/lib/TADIcon"

export default function Page() {
    const links = [
        { name: 'Software Portfolio', href: '/portfolio', icon: CodeBracketIcon, target: ""},
        { name: 'Composition Portfolio', href: 'https://tadepewmusic.com/', icon: MusicalNoteIcon, target: "_blank" },
        { name: 'Craft Portfolio', href: 'https://tdepewmusic.wixsite.com/tdepewmusic', icon: PaintBrushIcon, target: "_blank" },
        { name: 'TadLab', href: '/', icon: BeakerIcon, target: ""}
    ];

  return (
      <main className={"flex min-h-screen flex-col p-6"}>
          <div className={"mt-4 flex grow flex-col gap-4 justify-center items-center"}>
              <div className={"flex grow flex-col gap-6 rounded-lg bg-gray-100 px-6 py-10 border-2 border-black shadow-section-2d"}>
                  <div className={"flex h-56 items-end rounded-lg bg-belize-300 "}>
                      <div className={"flex flex-row items-end rounded-lg h-full px-4 lg:px-0 lg:pr-4 border-2 border-black"}>
                          <div className={"hidden lg:inline pb-2"}>
                              <TADIcon width={120} height={120} />
                          </div>
                          <div className={"flex items-center lg:items-end h-full"}>
                              <p className={`${rum.className} text-white-100 text-center text-8xl lg:text-9xl`}>Trevor DePew</p>
                          </div>
                      </div>
                  </div>
                  <p className={` ${sansita.className} text-xl text-black lg:text-3xl lg:leading-normal text-center`}>
                      <strong className={"text-2xl lg:text-4xl"}>Welcome to my website.</strong><br /> This is the home
                      for all of my work, have a look around!
                  </p>
                  <div className={"flex flex-col items-center gap-2"}>
                      {links.map((link, i) => {
                          const LinkIcon = link.icon;
                          return (
                              <Link
                                  key={i}
                                  href={link.href}
                                  target={link.target}
                                  className={clsx("flex justify-center items-center w-full border-2 border-black gap-5 px-6 py-3 text-2xl font-medium shadow-button-inner lg:shadow-button-inner-big",
                                      {
                                          "rounded-t-lg": i === 0,
                                          "rounded-b-lg": i === links.length - 1,
                                          "bg-pomegranate-300 lg:hover:bg-pomegranate-400": link.name === "Software Portfolio",
                                          "bg-orange-300 lg:hover:bg-orange-400": link.name === "Composition Portfolio",
                                          "bg-yellow-300 lg:hover:bg-yellow-400": link.name === "Craft Portfolio",
                                          "bg-emerald-300 lg:hover:bg-emerald-400": link.name === "TadLab"

                                      }
                                  )}
                              >
                                  <span>{link.name}</span>
                                  <LinkIcon className={"w-6"} />
                              </Link>
                          );
                      })}
                  </div>
              </div>

          </div>
      </main>
  );
}