import UserProfile from '../components/profile/user-profile';
import { getSession } from 'next-auth/react';

function ProfilePage() {
  return <>
  <div className="bg-[#f3f4f6] dark:bg-black min-h-screen">
  <UserProfile />
  </div>
  </>;
}

export async function getServerSideProps(context) {
  const session = await getSession({req: context.req});

  // if user is not logged in, redirect to auth page
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}


export default ProfilePage;