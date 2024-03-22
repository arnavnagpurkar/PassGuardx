"use client"
import Link from "next/link";
import Image from "next/image";
import PassGuard from "./PassGuard";

function Navbar() {
  const toggleModes = () => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.toggle("dark");
      const lightModeBg = document.querySelector("#light-mode-bg");

      if (html.classList.contains("dark")) {
        if (lightModeBg) {
          lightModeBg.remove();
        }
      }
      else {
        const body = document.querySelector("body");
        if (body) {
          body.insertAdjacentHTML(
            "beforeend",
            ` <div id="light-mode-bg" class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>`
          );
        }
      }
    }
  };

  return (
    <nav>
      <div className="dark:bg-zinc-900 bg-slate-50 flex flex-col gap-4 sm:flex-row sm:gap-0 justify-between items-center py-8 px-6">
        <div className="logo-text text-3xl font-semibold md:block hidden">
          <Link href={"/"}>
            <PassGuard />
          </Link>
        </div>
        <ul className="flex gap-12 text-lg mt-1 md:w-auto w-full md:justify-normal justify-around">
          <li className="hover:opacity-80 transition-all cursor-pointer">
            <button onClick={toggleModes}>
              <Image
                src={"/images/modeToggle.svg"}
                width={25}
                height={25}
                alt="mode toggle"
                className="dark:invert invert-0"
              />
            </button>
          </li>
          <li className="hover:opacity-80 transition-all">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:opacity-80 transition-all">
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
