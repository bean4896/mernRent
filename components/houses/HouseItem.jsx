import Card from "../ui/Card";
import { useRouter } from 'next/router';

function memoryItem(props) {
  // check date format
  const router = useRouter();
  console.log(props.id);
  // var date1 = "2006-04-30";
  // var date2 = props.date;

  // var date1_s = date1.replace(/\-/g, "/");
  // var date2_s = date2.replace(/\-/g, "/");

  // var date1_s = date1.replace("-", "/");

  // var date_retire = Date.parse(date1_s);
  // var dateItem_unix = Date.parse(date2_s);

  // console.log(date_retire);
  // console.log(dateItem_unix);

  function showDetailHandler() {
    router.push("/" + props.id);
  }
  
  let areaclass = '';
  if (props.area === 'redline') {
    areaclass = 'text-white rounded w-fit py-1 px-2 bg-red-500 flex-row flex';
  } else if (props.area === 'downtown') {
    areaclass = 'text-white rounded w-fit p-1 bg-yellow-500 flex-row flex';
  } else if (props.area === 'purpleline') {
    areaclass = 'text-white rounded w-fit p-1 bg-purple-500 flex-row flex';
  }
 
  return (
    <Card> 
      <div className="mx-auto house-item cursor-pointer pb-4" onClick={showDetailHandler}>
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
    
        <div className={areaclass}>
        <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
              className="w-5 h-5 mt-0.5 fill-white mr-2" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512H82.7c8.5 0 16.6-3.4 22.6-9.4L160 448H288l54.6 54.6c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zM224 384c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"/></svg>
           {props.area}
           </div>
 
        <p className="opacity-60 dark:opacity-60 mt-2"> {props.address} </p>
        <p className="opacity-60 dark:opacity-60">{props.description}</p>
        </div>
      </div>
    </Card>
  );
}

export default memoryItem;
