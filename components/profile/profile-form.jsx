import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Web3Button, useAccount } from "@web3modal/react";

function ProfileForm(props) {
  const [changePassword, setChangePassword] = useState(false);
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const { account, isConnected } = useAccount()

  const changePasswordSwitch = (e) => {
    e.preventDefault();
    setChangePassword(!changePassword);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const enteredName = nameRef.current.value;
    // const enteredContact = contactRef.current.value;
    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    const profileData = {
      // name: enteredName,
      // contact: enteredContact,
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    };
    console.log(profileData);
    // if (profileData.length !== 0) {
    props.onUpdateProfile({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
    oldPasswordRef.current.value = "";
    newPasswordRef.current.value = "";
    // }
    // else {
    //   alert("Please enter all fields");
    // }
  };

  const router = useRouter();
  const { data: session } = useSession();

  function LogoutHandler() {
    router.push("/");
    signOut();
  }


  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full p-10 max-w-[550px] rounded-lg containerBorder">
        <div className="form-control">
          Email :
          {session && (
            <div>
              {session.user.email}
              {session.user.name}
            </div>
          )}
        </div>

        <form>
          {/* <div className='form-control'>
               User Name : 
               <input type="text" className="input_field" ref={nameRef} id="username" />
            </div> */}

          <div className="form-control">
            <label className="block">Wallet :</label>
            <Web3Button />
          {account.isConnected && <div className="max-w-full mt-2"><label className="block">Address :</label>
          <div className="address">{account.address}</div></div> }
          </div>

          {/* <div className='form-control'>
              <label htmlFor="contact" className="block">
               Contact : 
              </label>
              <input type="tel"  className="input_field" ref={contactRef} id="contact" />
            </div> */}

          <div className="form-control">
            <button className="btn" onClick={changePasswordSwitch}>
              Change Password
            </button>
          </div>
          {changePassword && (
            <div>
              <div className="form-control">
                <label htmlFor="new-password" className="block">
                  New Password
                </label>
                <input
                  type="password"
                  className="input_field"
                  ref={newPasswordRef}
                  id="new-password"
                />
              </div>

              <div className="form-control">
                <label htmlFor="old-password" className="block ">
                  Old Password
                </label>
                <input
                  type="password"
                  className="input_field"
                  ref={oldPasswordRef}
                  id="old-password"
                />
              </div>
            </div>
          )}

          <div className="form-control">
            <button type="submit" className="btn" onClick={submitHandler}>
              Update Profile
            </button>
          </div>

          {session && (
            <div className="form-control">
              <button className="btn_error" onClick={LogoutHandler}>
                Logout
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
