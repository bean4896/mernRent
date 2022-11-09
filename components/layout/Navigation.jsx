import Toggle from "./toggle";
import { useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  function logOutHandler(e) {
    e.preventDefault();
    signOut();
  }

  // const logOutHandler = useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/");
  //     signOut();
  //   }
  // }, [status]);

  return (
    <header className="bg-white dark:bg-zinc-900 border-b-[0.5px] dark:border-neutral-600 ">
      <div className="nav-container">
        <nav className="flex flex-row p-5 mx-auto items-center justify-between">
          <div>
            <Link href="/">
              <h1>MERN House</h1>
            </Link>
          </div>

          <div className="flex flex-row align-center items-center">
            <ul className="flex flex-row space-x-4">
              {/* {session && <div>{session.user.email}</div>} */}

              <Link href="/nft">
                <button className="btn focus:outline-none shadow-none p-1 text-lg rounded-md outline-none ring-transparent cursor-pointer">
                <svg className="w-6 h-6" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.4749 65.9339L64.3849 7.28394L100.295 65.9339L64.3849 86.8539L28.4749 65.9339Z" fill="currentColor"/>
<path d="M64.3849 93.444L99.1449 71.864L64.3849 121.284L28.8049 71.864L64.3849 93.444Z" fill="currentColor"/>
</svg>

                </button>
              </Link>

              {session && (
                <Link href="/newhouse">
                  <button className="btn rounded-md ">
                    Add House
                  </button>
                </Link>
              )}

              {!session && (
                <Link href="/auth">
                  <button className="btn focus:outline-none shadow-none p-1 text-lg rounded-md outline-none ring-transparent cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </Link>
              )}

              {/* {session && (
                <Link href="/auth">
                  <button
                    onClick={logOutHandler}
                    className="btn rounded-md text-[#ffffff] bg-purple-900 dark:text-yellow-400"
                  >
                    Logout
                  </button>
                </Link>
              )} */}

              {session && (
                <Link href="/profile">
                  <button className="btn rounded-md">
                    Profile
                  </button>
                </Link>
              )}
            </ul>
            <Toggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
