import MeetupList from "@/components/meetups/MeetupList";
import React, { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>meetups</title>
        <meta
          name="description"
          content="can access the meetups data here on one clidk"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}
// export async function getServerSideProps(context) {
//   //context => will have req and res properties we can access
//   //fetch data functions and other things we can write here
//   // this will reevaluate every time this component is rendered.

//   return {
//     props: { meetups: meetups },
//   };
// }
export async function getStaticProps() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://rahuldeshmukh4545:lAfW3iAC3x3zdDQv@cluster0.f5cboss.mongodb.net/mongodatabase?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();

    //this will revalidate the page only after one hour with new data
    return {
      props: {
        meetups: meetups.map((e) => {
          return {
            id: e._id.toString(),
            title: e.title,
            address: e.address,
            image: e.image,
          };
        }),
      },
      revalidate: 60,
    };
  } catch (err) {
    console.log(err);
  }
}
export default HomePage;
