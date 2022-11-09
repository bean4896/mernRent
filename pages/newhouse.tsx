import NewHouse from "../components/houses/NewHouse";


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
        <NewHouse onAddhouse={addhouseHandler} />
      </div>
    </>
  );
}

export default NewhousePage;
