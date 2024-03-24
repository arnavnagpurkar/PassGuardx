"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PassGuard from "@/components/PassGuardx";
import toast, { Toaster } from 'react-hot-toast';


export default function Home() {
  const ref = useRef(null);
  const [form, setForm] = useState({ websiteURL: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    const passwordInput = ref.current;
    const showimg = document.querySelector("#showimg")
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      showimg.src = '/images/eyecross.png';
    }
    else {
      passwordInput.type = 'password';
      showimg.src = '/images/eye.png';
    }
  };

  const savePassword = () => {
    if (form.websiteURL === '') {
      alert("Please Fill Website URL");
      return;
    }
    if (!(form.websiteURL.startsWith("http://") || form.websiteURL.startsWith("https://"))) {
      alert("Not a valid website, website names start with http or https !!");
      return;
    }
    if (form.username === '') {
      alert("Please Fill Username");
      return;
    }
    if (form.password === '') {
      alert("Please Fill Password");
      return;
    }
    const charNotAllowed = [' ', '\t', '\n', '\r', '\x0b', '\x0c', '(', ')', '§', '±', '©', '®', '™', 'µ', '¬', '¦'];
    for (const char of form.password) {
      if (charNotAllowed.includes(char)) {
        alert("Some characters are not allowed in the password");
        return;
      }
    }
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    setForm({ websiteURL: "", username: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const deleteAll = () => {
    const confirmation = confirm("Are you sure you want to delete all passwords??");
    if (confirmation) {
      setPasswordArray([]);
      localStorage.setItem("passwords", JSON.stringify([]));
      toast.success("Deleted all passwords", {
        icon: '🗑️',
        style: {
          marginTop: "6rem",
          background: document.querySelector("html").classList.contains("dark") && "#333",
          color: document.querySelector("html").classList.contains("dark") && "#fff"
        }
      })
    }
  };

  const deleteCredential = (index) => {
    const confirmation = confirm("Are you sure you want to delete this password?");
    if (confirmation) {
      const updatedPass = [...passwordArray];
      updatedPass.splice(index, 1);
      setPasswordArray(updatedPass);
      localStorage.setItem("passwords", JSON.stringify(updatedPass));
      toast.success("Deleted password", {
        icon: '🗑️',
        style: {
          marginTop: "6rem",
          background: document.querySelector("html").classList.contains("dark") && "#333",
          color: document.querySelector("html").classList.contains("dark") && "#fff"
        }
      })
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard", {
      style: {
        marginTop: "6rem",
        background: document.querySelector("html").classList.contains("dark") && "#333",
        color: document.querySelector("html").classList.contains("dark") && "#fff"
      }
    })
  }

  return (
    <>
      {/* Toaster for user convinence */}
      <Toaster
        position="top-right"
      />
      <main>
        <div className="lg:mx-60 mx-2 my-5 ">
          <div className="info">
            <h1 className="text-4xl font-bold text-center md:mt-14 mt-2">
              <PassGuard />
            </h1>
            <p className="text-lg text-center my-3">
              The best free and open source password manager available on the internet.
            </p>
          </div>
          <h2 className="font-semibold text-2xl mt-8">Add a Password</h2>
          <div className="flex flex-col gap-5 my-8">
            <input
              value={form.websiteURL}
              onChange={handleChange}
              onKeyDown={(e) => { e.key === 'Enter' && savePassword() }}
              className='dark:bg-zinc-800 dark:text-white rounded-3xl border border-green-500 w-full px-4 py-2'
              type="text"
              name="websiteURL"
              placeholder='Enter Website URL'
            />
            <div className="flex w-full justify-between gap-5 sm:flex-row flex-col">
              <input
                value={form.username}
                onChange={handleChange}
                onKeyDown={(e) => { e.key === 'Enter' && savePassword() }}
                className='dark:bg-zinc-800 dark:text-white rounded-3xl border border-green-500 w-full px-4 py-2'
                type="text"
                name="username"
                placeholder='Enter Username'
              />
              <div className="relative flex flex-col">
                <input
                  ref={ref}
                  value={form.password}
                  onChange={handleChange}
                  onKeyDown={(e) => { e.key === 'Enter' && savePassword() }}
                  className='dark:bg-zinc-800 dark:text-white rounded-3xl border border-green-500 px-4 py-2'
                  type="password"
                  name="password"
                  placeholder='Enter Password'
                />
                <span
                  className="absolute right-4 top-[7px] cursor-pointer"
                  onClick={showPassword}
                >
                  <img
                    src={"/images/eye.png"}
                    width={25}
                    height={25}
                    alt="show/hide"
                    className="dark:invert invert-0 hover:opacity-85 transition-all"
                    id="showimg"
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={savePassword}
                className='flex justify-center items-center bg-green-400 hover:bg-green-300 transition-all rounded-full px-6 py-3 gap-2 w-fit border border-green-900 dark:border-white'
              >
                <Image
                  src={"/images/add.svg"}
                  width={30}
                  height={30}
                  alt="add icon"
                />
                <span className="dark:text-black">
                  Add Password
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="font-semibold text-2xl mt-8">
              Your Passwords
            </h2>
            {passwordArray.length > 0 && <button
              onClick={deleteAll}
              className="font-medium transition-all text-lg mt-8 mr-4 bg-green-400 hover:bg-green-300 px-5 py-2 rounded-full dark:text-black"
            >
              Delete All
            </button>}
          </div>
          {passwordArray.length === 0 ? (
            <div className='dark:font-normal font-light mt-4'>
              No Passwords to show, add some passwords to view them
            </div>
          ) : (
            <table className="table-auto w-full rounded-md overflow-hidden mt-5 sm:text-base text-[12px]">
              <thead className='dark:bg-zinc-900 bg-zinc-200'>
                <tr>
                  <th className='py-2'>
                    Site
                  </th>
                  <th className='py-2'>
                    Username
                  </th>
                  <th className='py-2'>
                    Password
                  </th>
                  <th className="py-2">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='dark:bg-zinc-800 bg-green-100 '>
                {passwordArray.map((item, index) => {
                  return <tr key={index}>
                    <td className='py-2 dark:border-none border text-center w-32'>
                      <div className="flex gap-3 justify-center items-center">
                        <span>
                          <Link
                            className="dark:text-blue-400 dark:hover:text-blue-500 text-blue-700 hover:text-blue-800 transition-all"
                            href={item.websiteURL}
                            target="_blank"
                          >
                            {item.websiteURL}
                          </Link>
                        </span>
                        <button
                          onClick={() => copyText(item.websiteURL)}
                          className="hover:opacity-80 transition-all"
                        >
                          <Image
                            src={"/images/copy.svg"}
                            width={18}
                            height={18}
                            alt="copy"
                            className="dark:invert invert-0"
                          />
                        </button>
                      </div>
                    </td>
                    <td className='py-2 dark:border-none border text-center w-32'>
                      <div className="flex gap-3 justify-center items-center">
                        <span>
                          {item.username}
                        </span>
                        <button
                          onClick={() => copyText(item.username)}
                          className="hover:opacity-80 transition-all"
                        >
                          <Image
                            src={"/images/copy.svg"}
                            width={18}
                            height={18}
                            alt="copy"
                            className="dark:invert invert-0"
                          />
                        </button>
                      </div>
                    </td>
                    <td className='py-2 dark:border-none border text-center w-32' type="password">
                      <div className="flex gap-3 justify-center items-center">
                        <span>
                          {/* Hiding user's password for security purposes */}
                          {"•".repeat(item.password.length)}
                        </span>
                        <button
                          onClick={() => copyText(item.password)}
                          className="hover:opacity-80 transition-all"
                        >
                          <Image
                            src={"/images/copy.svg"}
                            width={18}
                            height={18}
                            alt="copy"
                            className="dark:invert invert-0"
                          />
                        </button>
                      </div>
                    </td>
                    <td className="py-2 dark:border-none border text-center w-32">
                      <ul className="flex gap-5 justify-center items-center">
                        <li className="flex items-center justify-center">
                          <button
                            onClick={() => { deleteCredential(index); }}
                            className="hover:opacity-80 transition-all"
                          >
                            <Image
                              src={"/images/delete.svg"}
                              width={18}
                              height={18}
                              alt="delete"
                              className="dark:invert invert-0"
                            />
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
}
