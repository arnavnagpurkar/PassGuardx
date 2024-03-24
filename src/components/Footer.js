import Link from "next/link"
import PassGuardx from "./PassGuardx"
import Image from "next/image"

function Footer() {
  return (
    <footer>
      <div className="dark:bg-zinc-900 bg-zinc-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="dark:text-gray-400 text-gray-700 text-sm text-center sm:text-left">
            © Copyright -  2024 &nbsp;
            <Link
              href="https://github.com/arnavnagpurkar/PassGuardx/"
              target="_blank"
            >
              <PassGuardx />
            </Link>
            —&nbsp;
            <Link
              href="https://github.com/arnavnagpurkar"
              className="dark:text-blue-400 dark:hover:text-blue-300 text-blue-500 hover:text-blue-600 transition-all"
              target="_blank">
              @arnavnagpurkar
            </Link>
          </p>
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link
              href="https://github.com/arnavnagpurkar/PassGuardx/"
              target="_blank"
            >
              <Image
                src={"/images/github-mark.svg"}
                width={22}
                height={22}
                alt="github"
                className="hover:opacity-80 transition-all dark:invert-0 invert"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
