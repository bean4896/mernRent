function NftItem(props) {
  return (
    <div className="mx-auto cursor-pointer pb-4">
      <div className="group relative block bg-gray-900 rounded-md">
        <img
          className="absolute rounded-md inset-0 h-full w-full object-cover group-hover:opacity-50"
          src={props.image}
          alt={props.title}
        />
        <div className="relative p-2">
          <div className="mt-40">
            <div className="backdrop-filter rounded backdrop-blur-md bg-neutral-700 bg-opacity-30 backdrop-contrast-800 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <div className="p-2">
                <p className="text-l font-bold text-white">{props.title}</p>
                <p className="text-md text-white">{props.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default NftItem;
