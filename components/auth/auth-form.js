import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { basicSchema } from "../../lib/schemas";
import { getStaticProps } from "../../pages";

// fetch db and create user
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
  // alert(data.message);
}

function AuthForm() {

  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const closeModalHandler = (e) => {
    e.preventDefault();
    setIsLogin(true);
    setShowModal("");
    setErrorModal("");
  };

  const Modal = (props) => {
    return (
      <div
        className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-10"
        onClick={closeModalHandler}
      >
        <div className="bg-white px-16 py-14 rounded-md text-center">
          <h2 className={errorModal ? "text-xl mb-4 font-bold text-red-500" : 'text-xl mb-4 font-bold text-green-500'}>
            {props.title}
          </h2>
          <button
            className={errorModal ? "btn_error px-4 py-2 rounded-md text-md text-white" : "btn px-4 py-2 rounded-md text-md text-white bg-slate-500"}
            onClick={closeModalHandler}
          >
            {errorModal ? 'Close' : 'Login now'}
          </button>
        </div>
      </div>
    );
  };

  // get input data
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState("true");
  const router = useRouter();

  function switchAuthModeHandler(e) {
    e.preventDefault();
    setIsLogin((prevState) => !prevState);
  }

  // check if is login or signup
  // async function submitHandler(event) {
  //   event.preventDefault();
  //   const enteredEmail = emailInputRef.current.value;
  //   const enteredPassword = passwordInputRef.current.value;

  //   if (isLogin) {
  //     //login user
  //     const result = await signIn("credentials", {
  //       redirect: false,
  //       email: enteredEmail,
  //       password: enteredPassword,
  //     });
  //     if (!result.error) {
  //       router.replace("/");
  //       // set auth state
  //     }
  //     else if (result.error) {
  //       alert(result.error);
  //     }
  //     console.log(result);
  //     // alert('Password incorrect');
  //   } else {
  //     //create user
  //     try {
  //       const result = await createUser(enteredEmail, enteredPassword);
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //       alert(error.message);
  //     }
  //   }
  // }

  const onSubmit = async (values, actions) => {
    // console.log(values.email);
    // console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 200));
    if (isLogin) {
      //check login user
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      if (!result.error) {
        router.replace("/");
        // set auth state
      } else if (result.error) {
        setErrorModal(true);
        setShowModal(true);
      }
      console.log(result);
      // alert('Password incorrect');
    } else {
      //create user
      try {
        const result = await createUser(values.email, values.password);
        setErrorModal(false);
        setShowModal(true);
        console.log(result);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
    actions.resetForm();
  };
  //formik form
  const {
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  // console.log(errors);

  return (
    <>
      {showModal && <Modal title={errorModal ? 'Password or Email Incorrect' : 'Register Success!' }/>}
      {/* <Modal title='title haha' /> */}
      <div className="flex flex-col m-auto">
        <blockquote className="text-2xl font-semibold italic text-center text-neutral-900 dark:text-neutral-200 mb-5">
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 dark:before:bg-[#1c2c26] relative inline-block">
            <span className="relative text-white dark:text-[#46dd66] ">
              Login to Add Items
            </span>
          </span>
        </blockquote>
        <div className="flex lg:flex-row flex-col max-w-[900px] bg-white dark:bg-[#1e1e1e] rounded-lg">
          <div className="mx-auto w-full p-10 rounded-md">
            <h2 className="mb-3">{isLogin ? "Login" : "Sign Up"}</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label htmlFor="email" className="block">
                  Your Email
                </label>
                <input
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  className={
                    errors.email
                      ? "block input_field input-error"
                      : "block input_field"
                  }
                  id="email"
                  required
                  ref={emailInputRef}
                />
                {errors.email && touched.email && (
                  <div className="max-w-50">
                    <p className="text-red-500">{errors.email}</p>
                  </div>
                )}
              </div>

              <div className="form-control">
                <label htmlFor="password">Your Password</label>
                <input
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  id="password"
                  className={
                    errors.password
                      ? "block input_field input-error"
                      : "block input_field"
                  }
                  required
                  ref={passwordInputRef}
                />
                {errors.password && touched.password && (
                  <p className="text-red-500 max-w-fit">{errors.password}</p>
                )}
              </div>

              <div>
                {isLogin ? (
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn block rounded-md gr-btn"
                  >
                    Login
                  </button>
                ) : (
                  <div>
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="btn block rounded-md gr-btn"
                    >
                      Create Account
                    </button>
                  </div>
                )}
                <button className="btn mt-5 " onClick={switchAuthModeHandler}>
                  Switch to {isLogin ? "Sign Up" : "Login"}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-yellow-400 mx-auto w-full p-10 lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
            <div className="rounded-lg">
              <button className="text-2xl">
                Login with Crypto Wallet
                <br />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
