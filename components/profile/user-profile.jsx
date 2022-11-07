import ProfileForm from "./profile-form";
import { useSession } from "next-auth/react";
function UserProfile() {
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
  const { data: session, status } = useSession();

  return (
    <section>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
