import NewMemory from "../components/memories/NewMemory";
import { useRouter } from "next/router";

function NewMemoryPage() {
  const router = useRouter();
   // addMemoryHandler is a function that is passed to NewMemory component, and it is executed when the form is submitted
   //  it receives the entered data as an argument
  async function addMemoryHandler(memoryData){
    const response = await fetch("/api/new-memory", {
      method: "POST",
      body: JSON.stringify(memoryData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    // go back to home page after submit new memory
    // router.push("/");
  }

  return (
    <>
      <div className="bg-[#f3f4f6] dark:bg-black">
        <NewMemory onAddMemory={addMemoryHandler} />
      </div>
    </>
  );
}

export default NewMemoryPage;
