import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.bvlhpok.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    // connect to db
    const client = await MongoClient.connect((connectionString));
    const db = client.db(); 

    const meetupsCollection = db.collection('property');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'property inserted!' });
  }
}

export default handler;