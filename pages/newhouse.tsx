import NewHouse from "../components/houses/NewHouse";
import { getSession } from "next-auth/react";

function NewhousePage() {
   // addhouseHandler is a function that is passed to Newhouse component, and it is executed when the form is submitted
   //  it receives the entered data as an argument
  async function addhouseHandler(houseData){
    const response = await fetch("/api/new-house", {
      method: "POST",
      body: JSON.stringify(houseData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    // go back to home page after submit new house
    // router.push("/");
  }

  return (
    <>
      <div className="bg-[#f3f4f6] dark:bg-black min-h-screen">
        <NewHouse onAddHouse={addhouseHandler} />
      </div>
    </>
  );
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

export default NewhousePage;
