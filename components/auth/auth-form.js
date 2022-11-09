import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

async function createUser(email, password) {
  const response = await fetch("/api/auth/db", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data.message);
  alert(data.message);
}

function AuthForm() {
  // get input data
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState("");
  const router = useRouter();

  function switchAuthModeHandler(e) {
    e.preventDefault();
    setIsLogin((prevState) => !prevState);
  }

  // check if is login or signup
  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      //login user
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if (!result.error) {
        router.replace("/");
        // set auth state
      }
      else if (result.error) {
        alert(result.error);
      }
      console.log(result);
      // alert('Password incorrect');
    } else {
      //create user
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
  }


  return (
    <>
      <div className="flex flex-col m-auto">
        <blockquote className="text-2xl font-semibold italic text-center text-neutral-900 dark:text-neutral-200 mb-5">
          dasdas
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span class="relative text-white">Badge</span>
          </span>
          XXXXX
        </blockquote>

        <div className="flex lg:flex-row flex-col max-w-[900px] bg-white dark:bg-[#1e1e1e] rounded-lg">
          <div className="mx-auto w-full p-10 rounded-md">
            <h2 className="mb-3">{isLogin ? "Login" : "Sign Up"}</h2>
            <form onSubmit={submitHandler}>
              <div className="form-control">
                <label htmlFor="email" className="block">
                  Your Email
                </label>
                <input
                  type="email"
                  className="input_field"
                  id="email"
                  required
                  ref={emailInputRef}
                />
              </div>
              <div className="form-control">
                <label htmlFor="password">Your Password</label>
                <input
                  type="password"
                  id="password"
                  className="block input_field"
                  required
                  ref={passwordInputRef}
                />
              </div>
              <div>
                {isLogin ? (
                  <button className="btn block rounded-md gr-btn">Login</button>
                ) : (
                  <button className="btn block rounded-md gr-btn">
                    Create Account
                  </button>
                )}
                <button className="btn mt-5 " onClick={switchAuthModeHandler}>
                  Switch to {isLogin ? "Sign Up" : "Login"}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-yellow-400 mx-auto w-full p-10 lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
            <div className="rounded-lg">
              <h3 className="text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                <br />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
