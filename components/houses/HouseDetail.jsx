function HouseDetail(props) {
  let areaclass = "";
  if (props.area === "redline") {
    areaclass =
      "text-white rounded w-fit py-1 px-2 bg-red-500 my-4 flex-row flex";
  } else if (props.area === "downtown") {
    areaclass = "text-white rounded w-fit p-1 bg-yellow-500 my-4 flex-row flex";
  } else if (props.area === "purpleline") {
    areaclass = "text-white rounded w-fit p-1 bg-purple-500 my-4 flex-row flex";
  }

  return (
    <section className="flex items-center flex-col">
      <div className="detailWrapper p-2">
        <img src={props.image} alt={props.title} />
        <h2 className="text-2xl font-bold py-2">{props.title}</h2>
        <div className="py-2">Avaliable Date : {props.date}</div>
        <div className="detailRow font-bold text-l">${props.price} </div>
        <div className={areaclass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            className="w-5 h-5 mt-0.5 fill-white mr-2"
            viewBox="0 0 448 512"
          >
            <path d="M96 0C43 0 0 43 0 96V352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512H82.7c8.5 0 16.6-3.4 22.6-9.4L160 448H288l54.6 54.6c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zM224 384c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" />
          </svg>
          {props.area}
        </div>
        <div className="block">Address:</div>
        <address className="detailRow">{props.address}</address>
        <div className="rounded-md my-4 min-h-[100px] max-w-[450px] detailRow">
          {props.description}
        </div>
        <a
          href={`tel:${props.phone}`}
          className="flex flex-row btn py-4 my-4 text-l w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          Contact
        </a>
      </div>
    </section>
  );
}

export default HouseDetail;
