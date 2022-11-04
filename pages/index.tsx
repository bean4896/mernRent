import Head from 'next/head'
import { Fragment } from 'react';
import MemoriesList from '../components/memories/MemoriesList';
import { connectToDatabase } from '../lib/db';

function Home(props) {
  return (
    <Fragment>
    <div className="max-w-[940px] mt-10 m-auto">
      <Head>
        <title>Next Memories</title>
        <meta name="description"
         content="Next Memories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <MemoriesList memories={props.memories} />
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {

  const client = await connectToDatabase();
  const db = client.db();
  const memoriesCollection = db.collection('memories');
  const memories = await memoriesCollection.find().toArray();
  client.close();

  return {
    props: {
      memories: memories.map(memory => ({
        title: memory.title,
        image: memory.image,
        date: memory.date,
        description: memory.description,
        id: memory._id.toString()
      }))
    }
  }
}


export default Home;