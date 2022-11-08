import React from "react";
import Masonry from "react-masonry-css";

const kobe_shoes = [
  {
    id: 1,
    name: "Nike Kobe 1 Protro",
    releastePrice: 200,
    releasteDate: "2021-01-01",
    season: "All",
    description: "dads"
  },
  {
    id: 2,
    name: "Adidas Kobe 2 Protro",
    releastePrice: 200,
    releasteDate: "2021-01-01",
    season: "All",
    description: "dads"
  },
  {
    id: 3,
    name: "Nike Kobe 3 Protro",
    releastePrice: 200,
    releasteDate: "2021-01-01",
    season: "All",
    description: "dads"
  },
  {
    id: 4,
    name: "Nike Kobe 4 Protro",
    releastePrice: 200,
    releasteDate: "2021-01-01",
    season: "All",
    description: "dads"
  },
];

function Shoes() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  return (
    <div className="flex items-center justify-center">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {kobe_shoes.map((shoe) => (
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div >
              <img src=""></img>
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                {shoe.name}
              </h1>
              <span className="px-2 py-1 font-medium leading-5 text-green-800 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                {shoe.releastePrice}
              </span>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Shoes;
