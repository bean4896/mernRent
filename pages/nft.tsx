import React from "react";
import NFTList from '../components/nfts/NFTList';
import { connectToDatabase } from "../lib/db";



function items(props) {
  return (
    <>
    <div className="max-w-[1140px] mt-10 m-auto">
        <NFTList nfts={props.nfts} />
    </div>
    </>
  );
}


export async function getStaticProps() {
  const client = await connectToDatabase();
  const db = client.db();
  const nftsCollection = db.collection('nfts');
  const nfts = await nftsCollection.find().toArray();
  client.close();

  return {
    props: {
      nfts: nfts.map(nft => ({
        title: nft.title,
        image: nft.image,
        price: nft.price,
        description: nft.description,
        id: nft._id.toString()
      }))
    },
    revalidate: 3,
  }
}


export default items;
