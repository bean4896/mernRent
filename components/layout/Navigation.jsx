import Toggle from "./toggle";
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
          <div className="flex flex-row">
            <div className="mr-4">
              <Link href="/" className={router.pathname == "/" ? "Nav" : "Nav"}>
                <button
                  className={router.pathname === "/" ? "btn_active" : "btn"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </button>
              </Link>
            </div>
            <Link href="/nft">
              <button
                className={router.pathname === "/nft" ? "btn_active" : "btn"}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 129 129"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.4749 65.9339L64.3849 7.28394L100.295 65.9339L64.3849 86.8539L28.4749 65.9339Z"
                    fill="currentColor"
                  />
                  <path
                    d="M64.3849 93.444L99.1449 71.864L64.3849 121.284L28.8049 71.864L64.3849 93.444Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </Link>
            <div></div>
          </div>

          <div className="flex flex-row align-center items-center">
            <ul className="flex flex-row space-x-4">
              {session && (
                <Link href="/newnft">
                  <button
                    className={
                      router.pathname === "/newnft" ? "btn_active" : "btn"
                    }
                  >
                    Add NFT
                  </button>
                </Link>
              )}

              {session && (
                <Link href="/newhouse">
                  <button
                    className={
                      router.pathname === "/newhouse" ? "btn_active" : "btn"
                    }
                  >
                    Add House
                  </button>
                </Link>
              )}

              {!session && (
                <Link href="/auth">
                  <button
                    className={
                      router.pathname === "/auth" ? "btn_active" : "btn"
                    }
                  >
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
                  <button
                    className={
                      router.pathname === "/profile" ? "btn_active" : "btn"
                    }
                  >
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
