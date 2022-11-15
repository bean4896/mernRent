import ProfileForm from "./profile-form";
import { useState } from "react";
import Modal from "../ui/Modal";

const UserProfile = () => {
  const [errorModal, setErrorModal] = useState(false);
  const errorHandler = () => {
    setErrorModal(null);
    document.querySelector("html").style.overflow = "scroll";
  };
  // Redirect away if NOT auth
  //   const [isLoading, setIsLoading] = useState(true);

  //check if session is loaded
  //   useEffect(() => {
  //     getSession().then((session) => {
  //       //if session is loaded, set session and set loading to false
  //       if (!session) {
  //         window.location.href = "/auth";
  //         return;
  //       } else {
  //         setIsLoading(false);
  //       }
  //     });
  //   }, []);

  // if is loading, return loading message
  //   if (isLoading) {
  //     return <p className="text-center">Loading...</p>;
  //   }
  // const { data: session, status } = useSession();

  async function changeProfileHandler(profileData) {
    const response = await fetch("api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    console.log(response.status);

    if (response.status === 200) {
      document.querySelector("html").style.overflow = "hidden";
      setErrorModal({
        title: "Password Changed Successfully",
        message: "Okay",
        titleClass: "text-l font-bold text-green-500 text-center mb-4",
        buttonClass: "btn my-0 mx-auto block",
      });
    } else if (response.status === 403) {
      // disable scroll
      document.querySelector("html").style.overflow = "hidden";
      setErrorModal({
        title: "Old Password is Incorrect",
        message: "Okay",
        titleClass: "text-l font-bold text-red-500 text-center mb-4",
        buttonClass: "btn_error",
      });
    }
  }

  return (
    <div>
      {errorModal && (
        <Modal
          buttonClass={errorModal.buttonClass}
          titleClass={errorModal.titleClass}
          title={errorModal.title}
          message={errorModal.message}
          onConfirm={errorHandler}
        />
      )}
      <ProfileForm onUpdateProfile={changeProfileHandler} />
    </div>
  );
};

export default UserProfile;
