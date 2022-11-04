import { useState, useRef } from "react";
import { signIn } from "next-auth/react";

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
  console.log(data);
}

function AuthForm() {
  // get input data
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

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
        // set auth state
      }
      console.log(result);
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full p-10 max-w-[550px] shadow-md">
          <h1 className="mb-3">{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <label htmlFor="email" className="block">
                Your Email
              </label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className="form-control">
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                className="block"
                required
                ref={passwordInputRef}
              />
            </div>
            <div>
              <button className="btn block bg-purple-700 p-2 rounded-md mb-3 text-white">
                {isLogin ? "Login" : "Create Account"}
              </button>
              <button type="button btn pt-5" onClick={switchAuthModeHandler}>
                Switch to {isLogin ? "Sign Up" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AuthForm;
