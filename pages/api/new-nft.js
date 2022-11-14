import { MongoClient } from "mongodb";


async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect(
            'mongodb+srv://iverson3:Slowhand.1996@test-one.bvlhpok.mongodb.net/house?retryWrites=true&w=majority'
          );
            const db = client.db();
            const nftsCollection = db.collection('nfts');
            const result = await nftsCollection.insertOne(data);
            console.log(result);
            client.close();
            res.status(201).json({ message: 'NFT inserted!' });
    }
}

export default handler;