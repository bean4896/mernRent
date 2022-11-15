import Head from 'next/head'
import { Fragment } from 'react';
import HouseList from '../components/houses/HouseList';
import { connectToDatabase } from '../lib/db';
import { sortDataByDate } from '../components/houses/SortData';
import { useMemo } from 'react';


function Home(props) {
  const sortedMemo = sortDataByDate(props.houses);
  const sortedhouses = useMemo(() => sortedMemo, [sortedMemo]);
  return (
    <Fragment>
    <div className="max-w-[1140px] mt-10 m-auto">
      <Head>
        <title>Next houses</title>
        <meta name="description"
         content="Next houses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HouseList houses={sortedhouses} />
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {
    
  const client = await connectToDatabase();
  const db = client.db();
  const housesCollection = db.collection('property');
  const houses = await housesCollection.find().toArray();
  client.close();

  return {
    props: {
      houses: houses.map(house => ({
        title: house.title,
        image: house.image,
        address: house.address,
        phone: house.phone,
        area: house.area,
        price: house.price,
        date: house.date,
        description: house.description,
        id: house._id.toString()
      }))
    },
    revalidate: 10,
  }
}


export default Home;