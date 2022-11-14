
import HouseDetail from '../../components/houses/HouseDetail';
import { MongoClient, ObjectId } from 'mongodb';
import Loader from  '../../components/ui/LoaderCircle';
import {useEffect, useState} from 'react';


function houseDetailPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(false), 500);
    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer1);
    };
  }, 
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
  []);

    return (
      // <>{isLoading && <Loader />}
      <HouseDetail
      image={props.houseData.image}
      title={props.houseData.title}
      price={props.houseData.price}
      date={props.houseData.date}
      phone={props.houseData.phone}
      area={props.houseData.area}
      address={props.houseData.address}
      description={props.houseData.description}
             />
            //  </>
    );
  }


// url: /houses/[houseId]/index.jsx 
// getStaicProps is a function that is executed by nextjs before the component is rendered
export async function getStaticPaths() {
 // fallback: false means other routes should 404.
const client = await MongoClient.connect('mongodb+srv://iverson3:Slowhand.1996@test-one.bvlhpok.mongodb.net/house?retryWrites=true&w=majority');
const db = client.db(); 
const houseCollection = db.collection('property');

const houses = await houseCollection.find({}, {_id:1}).toArray();

  return {
    fallback:false,
    paths: houses.map(house => ({params: {houseId: house._id.toString()}}))
  };
}

// getStaticProps is called at build time on server-side.
export async function getStaticProps(context) {

  const houseId = context.params.houseId;
  console.log(houseId)

  //connect to database
  const client = await MongoClient.connect(
    'mongodb+srv://iverson3:Slowhand.1996@test-one.bvlhpok.mongodb.net/house?retryWrites=true&w=majority'
  );
  const db = client.db(); 
  
  const houseCollection = db.collection('property');
  
  //find the house with the id
  const selectedHouses = await houseCollection.findOne({_id: ObjectId(houseId)});
  client.close();
  return {
    props: {
      houseData: {
         image: selectedHouses.image,
          id: selectedHouses._id.toString(),
          title:selectedHouses.title,
          address:selectedHouses.address,
          price:selectedHouses.price,
          date:selectedHouses.date,
          area:selectedHouses.area,
          phone:selectedHouses.phone,
          description:selectedHouses.description
      }
    },
  };
}

export default houseDetailPage;
