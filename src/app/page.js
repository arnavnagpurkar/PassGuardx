"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PassGuard from "@/components/PassGuard";

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
    }
  };

  return (
    <>
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
            <input value={form.websiteURL} onChange={handleChange} onKeyDown={(e) => { e.key === 'Enter' && savePassword() }} className='dark:bg-zinc-800 dark:text-white rounded-3xl border border-green-500 w-full px-4 py-2' type="text" name="websiteURL" placeholder='Enter Website URL' />
            <div className="flex w-full justify-between gap-5 sm:flex-row flex-col">
              <input value={form.username} onChange={handleChange} onKeyDown={(e) => { e.key === 'Enter' && savePassword() }} className='dark:bg-zinc-800 dark:text-white rounded-3xl border border-green-500 w-full px-4 py-2' type="text" name="username" placeholder='Enter Username' />
              <div className="relative flex flex-col">
                <input ref={ref} value={form.password} onChange={handleChange} onKeyDown={(e) => { e.key === 'Enter' && savePassword() }} className='dark:bg-zinc-800 dark:text-white rounded-3xl border border-green-500 px-4 py-2' type="password" name="password" placeholder='Enter Password' />
                <span className="absolute right-4 top-[7px] cursor-pointer" onClick={showPassword}>
                  <img
                    src={"/images/eye.png"}
                    width={25}
                    height={25}
                    alt="show/hide"
                    className="dark:invert invert-0"
                    id="showimg"
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <button onClick={savePassword} className='flex justify-center items-center bg-green-400 hover:bg-green-300 transition-all rounded-full px-6 py-3 gap-2 w-fit border border-green-900 dark:border-white'>
                <Image
                  src={"/images/add.svg"}
                  width={30}
                  height={30}
                  alt="add icon"
                />
                <span className="dark:text-black">Add Password</span>
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="font-semibold text-2xl mt-8">Your Passwords</h2>
            {passwordArray.length > 0 && <button onClick={deleteAll} className="font-medium transition-all text-lg mt-8 mr-4 bg-green-400 hover:bg-green-300 px-5 py-2 rounded-full dark:text-black">Delete All</button>}
          </div>
          {passwordArray.length === 0 ? (
            <div className='dark:font-normal font-light mt-4'>No Passwords to show, add some passwords to view them</div>
          ) : (
            <table className="table-auto w-full rounded-md overflow-hidden mt-5">
              <thead className='dark:bg-zinc-900 bg-zinc-200'>
                <tr>
                  <th className='py-2'>Site</th>
                  <th className='py-2'>Username</th>
                  <th className='py-2'>Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className='dark:bg-zinc-800 bg-green-100 '>
                {passwordArray.map((item, index) => {
                  return <tr key={index}>
                    <td className='py-2 dark:border-none border text-center w-32'>
                      <Link className="dark:text-blue-400 dark:hover:text-blue-500 text-blue-700 hover:text-blue-800 transition-all" href={item.websiteURL} target="_blank">
                        {item.websiteURL}
                      </Link>
                    </td>
                    <td className='py-2 dark:border-none border text-center w-32'>{item.username}</td>
                    <td className='py-2 dark:border-none border text-center w-32'>{item.password}</td>
                    <td className="py-2 dark:border-none border text-center w-32">
                      <ul className="flex gap-5 justify-center items-center">
                        <li>Delete</li>
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
