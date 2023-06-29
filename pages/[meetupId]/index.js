import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import React from "react";

function MeetDetails(props) {
  // const router = useRouter();
  // const id = router.query.meetupId;
  // const item = meetups.find((e) => e.id === id);
  return (
    <>
      <Head>
        <title>{props.item.title}</title>
        <meta name={props.item.title} content={props.item.description} />
      </Head>
      <MeetupDetails item={props.item} />
    </>
  );
}

export async function getStaticPaths() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://rahuldeshmukh4545:lAfW3iAC3x3zdDQv@cluster0.f5cboss.mongodb.net/mongodatabase?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    return {
      fallback: false,
      paths: meetups.map((e) => {
        return { params: { meetupId: e._id.toString() } };
      }),
    };
  } catch (err) {
    console.log(err);
  }
}
export async function getStaticProps(context) {
  //cant use hooks here.
  //fetch the data for single meetup
  const meetupId = context.params.meetupId;
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://rahuldeshmukh4545:lAfW3iAC3x3zdDQv@cluster0.f5cboss.mongodb.net/mongodatabase?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const selectedMeetup = await meetupsCollection.findOne({
      _id: new ObjectId(meetupId),
    });

    return {
      props: {
        item: {
          id: meetupId,
          title: selectedMeetup.title,
          image: selectedMeetup.image,
          address: selectedMeetup.address,
        },
      },
    };
  } catch (err) {
    console.log("err");
  }
}

export default MeetDetails;
