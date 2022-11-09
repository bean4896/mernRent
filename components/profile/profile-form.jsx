// import classes from './profile-form.module.css';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function ProfileForm() {
  const router = useRouter();
  const { data: session, status } = useSession();

  function LogoutHandler() {
    router.push("/");
    signOut();
  }

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full p-10 max-w-[550px] rounded-lg containerBorder">
        <form>
            <div className='form-control'>
            Email : {session && <div>{session.user.email}</div>}
            </div>
          <div className="form-control">
            <label htmlFor="new-password" className="block">
              New Password
            </label>
            <input type="password" className="input_field"  id="new-password" />
          </div>
      
          <div className="form-control">
            <label htmlFor="old-password" className="block ">
              Old Password
            </label>
            <input type="password" className="input_field"  id="old-password" />
          </div>
          <div className="form-control">
            <button className="btn">Change Password</button>
          </div>

          {session && (
            <div className="form-control">
              <button className="btn" onClick={LogoutHandler}>Logout</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
