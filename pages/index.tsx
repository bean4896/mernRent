import Head from 'next/head'
import { Fragment } from 'react';
import HouseList from '../components/houses/HouseList';
import { connectToDatabase } from '../lib/db';
import { sortDataByDate } from '../components/houses/SortData';
import { useMemo,useState } from 'react';
import Search from '../components/Search'

function Home(props) {
  const [searchTerm, setSearchTerm] = useState(false);
  const sortedMemo = sortDataByDate(props.houses);
  const sortedhouses = useMemo(() => sortedMemo, [sortedMemo]);
  const SearchHandler = () => {
    setSearchTerm(!searchTerm);
    document.querySelector("html").style.overflow = "scroll";
  }
  
  return (
    <Fragment>
    <div className="max-w-[1140px] mt-10 m-auto">
      <Head>
        <title>Next houses</title>
        <meta name="description"
         content="Next houses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <button onClick={SearchHandler} >Search</button>
        {searchTerm && <Search onConfirm={SearchHandler} />}
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
    revalidate: 5,
  }
}


export default Home;