import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // connect to db
    const client = await MongoClient.connect(
      'mongodb+srv://iverson3:Slowhand.1996@test-one.bvlhpok.mongodb.net/memories?retryWrites=true&w=majority'
    );
    const db = client.db(); 

    const meetupsCollection = db.collection('memories');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'memories inserted!' });
  }
}

export default handler;