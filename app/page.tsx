'use client';

import Link from "next/link";
import { sansita, orbitron, rum } from "@/app/ui/fonts"
import { CodeBracketIcon, MusicalNoteIcon, PaintBrushIcon, BeakerIcon, ExclamationTriangleIcon} from "@heroicons/react/24/outline"
import clsx from "clsx"
import TADIcon from "@/app/lib/TADIcon"
import { useState } from "react"
import styles from '@/app/ui/portfolio/landing.module.css'

export default function Page() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const links = [
        { name: 'Software Portfolio', href: '/portfolio', icon: CodeBracketIcon, target: ""},
        { name: 'Composition Portfolio', href: 'https://tadepewmusic.com/', icon: MusicalNoteIcon, target: "_blank" },
        { name: 'Craft Portfolio', href: 'https://tdepewmusic.wixsite.com/tdepewmusic', icon: PaintBrushIcon, target: "_blank" },
        { name: 'TadLab', href: '/', icon: BeakerIcon, target: ""}
    ];


    const ConstructionModal = () => {
        return (
            <div className={clsx(
                "flex grow flex-row max-w-[42em] items-center m-3 bg-gray-100 border-2 border-black",
                {
                    "hidden": !modalOpen
                }
            )}>
                <ExclamationTriangleIcon className={"w-40 lg:w-24"} />
                <p className={`${orbitron.className} inline text-sm lg:text-lg mx-1 p-1 leading-none`}>
                    Come back soon!
                    The <span className={"text-emerald-600"}>TadLab</span> is under construction!
                    When it&apos;s up and running, it&apos;ll have all sorts of neat gizmos and whatsits!
                </p>
            </div>
        );
    }


    return (
      <main className={"flex min-h-screen flex-col p-6"}>
          <div className={"mt-4 flex flex-col gap-4 justify-center items-center"}>
              <div className={"flex flex-col gap-6 rounded-lg bg-gray-100 px-6 py-10 border-2 border-black shadow-section-2d"}>
                  <div className={"flex h-56 items-end rounded-lg bg-belize-300 border-2 border-black"}>
                      <div className={"flex flex-row items-end rounded-lg h-full px-4 lg:px-0 lg:pr-4"}>
                          <div className={"hidden lg:flex pb-2"}>
                              <TADIcon width={120} height={120} />
                          </div>
                          <div className={"flex items-center lg:items-end h-full"}>
                              <p className={`${rum.className} text-white-100 text-center text-8xl lg:text-9xl`}>Trevor DePew</p>
                          </div>
                      </div>
                  </div>
                  <p className={`${sansita.className} text-xl text-black lg:text-3xl lg:leading-normal text-center`}>
                      <strong className={"text-2xl lg:text-4xl"}>Welcome to my website.</strong><br /> This is the home
                      for all of my work, have a look around!
                  </p>
                  <div className={"flex flex-col items-center gap-2"}>
                      {links.map((link, i) => {
                          const LinkIcon = link.icon;
                          return (
                              <div
                                  className={"w-full"}
                                  key={i}>
                                  <Link
                                      href={link.href}
                                      target={link.target}
                                      onClick={() => {if(link.name === "TadLab") setModalOpen(!modalOpen)}}
                                      className={clsx("flex justify-center items-center border-2 border-black gap-5 px-6 py-3 text-2xl font-medium shadow-button-inner lg:shadow-button-inner-big",
                                          {
                                              "rounded-t-lg": i === 0,
                                              "rounded-b-lg mb-4": i === links.length - 1,
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
                              </div>
                          );
                      })}
                  </div>
                  <div className={clsx(`${styles.construction} flex flex-initial items-center justify-center h-24 lg:h-32 border-2 border-black rounded-lg`,
                      {
                          "hidden" : !modalOpen
                      }
                      )}>
                      <ConstructionModal />
                  </div>
              </div>
          </div>
      </main>
    );
}