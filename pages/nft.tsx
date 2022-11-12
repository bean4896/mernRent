import React from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";

const kobe_items = [
  {
    id: 1,
    image:
      "/../public/images/nft/img-o.jpeg",
    name: "Nike Kobe 1 Protro",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 2,
    image:
      "/../public/images/nft/img-o.jpeg",
    name: "Adidas Kobe 2 Protro",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 3,
    image:
      "/../public/images/nft/img-o.jpeg",
    name: "Nike Kobe 3 Protro",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 4,
    image:
      "/../public/images/nft/img-o.jpeg",
    name: "Nike Kobe 4 Protro",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 5,
    image:
      "/../public/images/nft/img-o.jpeg",
    name: "Zoom Kobe 5",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 6,
    image:
      "/../public/images/nft/img-o.jpeg",
    name: "Zoom Kobe 6",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 7,
    image:
      "/../public/images/nft/img-o.jpeg",
    name: "Zoom Kobe 7",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 8,
    image:
      "/../public/images/nft/img-o.jpeg",
    name: "Zoom Kobe 8",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 9,
    image:
      "/../public/images/nft/img-o.jpeg",
    name: "Zoom Kobe 10",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 10,
    image: "/../public/images/nft/img-o.jpeg",
    name: "Zoom Kobe X High",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum isdummy text of the printing and tdummy text of the printing and t simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 11,
    image:
      "/../public/images/nft/img-o.jpeg",
    name: "Zoom Kobe XI",
    releasteDate: "2021-01-01",
    season: "All",
    description:
      "Lorem Ipsum is simply dummy text of dummy text of the printing and tdummy text of the printing and t the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

function items() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  return (
    <div className="flex justify-center w-full my-10">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {kobe_items.map((item) => (
          <div className="max-w-[400px]">
            <div className="group relative block bg-gray-900 rounded-md">
              {/* <Image
                className="absolute rounded-md inset-0 h-full w-full object-cover group-hover:opacity-50"
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
              /> */}
              <div className="relative p-2">
                <div className="mt-40">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="p-2">
                      <p className="text-sm text-white">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default items;
