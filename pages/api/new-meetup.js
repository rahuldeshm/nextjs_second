// This is server side code so this will never go to client side.
import { MongoClient } from "mongodb";

async function handler(req, res) {
  console.log("inside request");
  if (req.method === "POST") {
    const data = req.body;
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://rahuldeshmukh4545:lAfW3iAC3x3zdDQv@cluster0.f5cboss.mongodb.net/mongodatabase?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      console.log("this is the result of mongodb", result);
      client.close();
      res.status(201).json({ message: "Meetup added Successfully" });
    } catch (err) {
      console.log(err);
    }
  }
}

export default handler;
