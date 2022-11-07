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
              <h1> Home Page</h1>
            </Link>
          </div>

          <div className="flex flex-row align-center items-center">
            <ul className="flex flex-row space-x-4">
              {/* {session && <div>{session.user.email}</div>} */}

              {session && (
                <Link href="/newmemory">
                  <button className="btn rounded-md text-yellow-400 bg-purple-700 dark:bg-purple-900">
                    Add Memory
                  </button>
                </Link>
              )}

              {!session && (
                <Link href="/auth">
                  <button className="gr-btn">Add your memory</button>
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
                  <button className="btn rounded-md text-yellow-400 bg-yellow-50 dark:bg-yellow-900">
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
