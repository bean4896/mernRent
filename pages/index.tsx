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
        <button className='btn mb-4' onClick={SearchHandler} >
          <div className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
Search
</div></button>
        {searchTerm && <Search onDrop={SearchHandler} />}
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