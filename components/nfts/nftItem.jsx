function NftItem(props) {
  return (
    <div className="mx-auto cursor-pointer w-[18rem]">
      <div className="group relative block bg-gray-900 rounded-md">
        <img
          className="absolute rounded-md inset-0 h-full w-full object-cover group-hover:opacity-50"
          src={props.image}
          alt={props.title}
        />
        <div className="relative p-2">
          <div className="mt-40">
            <div className="backdrop-filter rounded backdrop-blur-md bg-neutral-700 bg-opacity-30 backdrop-contrast-800 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <div className="p-2 align-middle justify-center flex flex-col">
                <p className="text-l font-bold text-white text-center">{props.title}</p>
                <div className="flex mt-2 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
                <p className="text-md text-white">{props.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftItem;
