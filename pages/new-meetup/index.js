import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
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
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
