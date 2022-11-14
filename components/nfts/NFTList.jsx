import NftItem from "./nftItem";
import Masonry from "react-masonry-css";

function NFTList(props) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {props.nfts.map((nft) => (
        // nftItem is a component that takes in a nft object as a prop
        <NftItem
          key={nft.id}
          id={nft.id}
          image={nft.image}
          title={nft.title}
          description={nft.description}
          price={nft.price}
        />
      ))}
    </Masonry>
  );
}
export default NFTList;
