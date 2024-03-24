import PassGuardx from "@/components/PassGuardx";
import Link from "next/link";

function About() {
  return (
    <main className="min-h-[78vh]">
      <div className="lg:mx-60 mx-2 my-5 ">
        <h1 className="text-3xl my-8 font-medium">
          About <PassGuardx /> :
        </h1>
        <h2 className="text-2xl font-medium">
          Features:
        </h2>
        <ul className="list-disc">
          <div className="mx-5 my-2">
            <li>Easy to use</li>
            <li>Secure</li>
            <li>Open Source</li>
            <li>Fast</li>
            <li>User-friendly GUI</li>
            <li>And many more...</li>
          </div>
        </ul>
        <h2 className="text-2xl font-medium mt-7">
          Security and Data Privacy:
        </h2>
        <p className="mt-2">
          <PassGuardx/> prioritizes security and data privacy by utilizing client-side storage through `localStorage`. This means that all passwords are securely stored locally on the user's machine and never transmitted to any server. By leveraging the browser's `localStorage` API, PassGuardx ensures that user passwords remain private and inaccessible to anyone other than the user themselves. This approach enhances security and gives users full control over their sensitive information, mitigating the risks associated with storing passwords on remote servers.
        </p>
        <h2 className="text-2xl font-medium mt-7">
          Creation:
        </h2>
        <p className="mt-2">
          <PassGuardx /> is created by {" "}
          <Link
            href="https://github.com/arnavnagpurkar"
            target="_blank"
            className="dark:text-blue-400 dark:hover:text-blue-300 text-blue-500 hover:text-blue-600 transition-all"
          >
            @arnavnagpurkar
          </Link>{" "}
          using Next.js, Tailwind CSS, and other utilities like React hot toast.
        </p>
        <h2 className="text-2xl font-medium mt-7">
          About:
        </h2>
        <p className="mt-2">
          <PassGuardx /> is the most secure and best free open-source password manager available on the internet. It's designed to provide users with a seamless and secure experience for managing their passwords across various platforms.
        </p>
        <h2 className="text-2xl font-medium mt-7">
          Future Plans:
        </h2>
        <p className="mt-2">
          We are continuously working on improving <PassGuardx /> to provide more features and enhance security. Some of our future plans include:
        </p>
        <ul className="list-disc mt-2">
          <div className="mx-5">
            <li>Integration with biometric authentication</li>
            <li>Enhanced cross-platform synchronization</li>
            <li>Customizable password strength analysis</li>
            <li>Additional security features such as two-factor authentication</li>
            <li>Improved user interface and experience</li>
            <li>And much more...</li>
          </div>
        </ul>
        <h2 className="text-2xl font-medium mt-7">
          Contact:
        </h2>
        <p className="mt-2">
          You can contact the developer through his {" "}
          <Link
            href={"https://github.com/arnavnagpurkar"}
            target="_blank"
            className="dark:text-blue-400 dark:hover:text-blue-300 text-blue-500 hover:text-blue-600 transition-all"
            >
            GitHub.
          </Link>
          <br />
          If you think this web app can be improved feel free to post Pull Requests on our {" "}
          <Link
            href={"https://github.com/arnavnagpurkar/PassGuardx/"}
            target="_blank"
            className="dark:text-blue-400 dark:hover:text-blue-300 text-blue-500 hover:text-blue-600 transition-all"
          >
            Open-Source Repository on GitHub.
          </Link>
          <br />
          You Can main the developer at {" "}
          <Link
            href="mailto:arnavn.dev@gmail.com"
            target="_blank"
            className="dark:text-blue-400 dark:hover:text-blue-300 text-blue-500 hover:text-blue-600 transition-all"
          >
            arnavn.dev@gmail.com.
          </Link>
          <br />
          If you want to report a problem in the web app feel free to post Issues {" "}
          <Link
            href={"https://github.com/arnavnagpurkar/PassGuardx/issues"}
            target="_blank"
            className="dark:text-blue-400 dark:hover:text-blue-300 text-blue-500 hover:text-blue-600 transition-all"
          >
            here.
          </Link>
        </p>
      </div>
    </main>
  );
}

export default About;
