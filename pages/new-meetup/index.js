import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";

function NewMeetup() {
  const router = useRouter();
  const addMeetupHandler = async (data) => {
    try {
      const result = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });

      console.log(result);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Head>
        <title>Add new Meetup</title>
        <meta name="meetup" content="can add your own meetup here" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetup;
