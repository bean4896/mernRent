import Card from "../ui/Card";

function memoryItem(props) {
  // check date format
  var date1 = "2006-04-30";
  var date2 = props.date;

  var date1_s = date1.replace(/\-/g, "/");
  var date2_s = date2.replace(/\-/g, "/");

  var date1_s = date1.replace("-", "/");

  var date_retire = Date.parse(date1_s);
  var dateItem_unix = Date.parse(date2_s);

  console.log(date_retire);
  console.log(dateItem_unix);

  return (
    <Card>
      <div className="mx-auto">
        <img
          className="rounded-t-md w-full"
          src={props.image}
          alt={props.title}
        />
          <div className="ml-4">
        <h3 className="text-xl font-bold mt-4">{props.title}</h3>
        <div className="items-center my-2 flex-row flex">
          <div className="flew-row flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="stroke-green-700 w-6 h-6 fill-green-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
          </div>

          <div className="mx-4">{props.date}</div>
        </div>
        <p className="opacity-60 dark:opacity-60">{props.description}</p>
        </div>
      </div>
    </Card>
  );
}

export default memoryItem;
