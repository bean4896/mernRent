import ProfileForm from "./profile-form";
import { useState } from "react";
import Modal from '../ui/Modal';

const UserProfile = (nmd) => {

  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

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
   const response = await fetch('api/user/change-password', {
    method: 'PATCH',
    body: JSON.stringify(profileData),
    headers: {
      'Content-Type': 'application/json'
    }
   });
   const data = await response.json();
   console.log(data);  
   console.log(response.status)

   if (response.status === 200) {
    alert("Password Changed Successfully");
   }
    else if (response.status === 403) {
      setShowModal(true);
      setErrorModal(true);
      <Modal message='Old Passworld is Incorrect' />
    }
  }

  return (
    <div>
       <Modal title='return title' message='return message'  /> 
      <ProfileForm onUpdateProfile={changeProfileHandler} />
    </div>
  );
}

export default UserProfile;
