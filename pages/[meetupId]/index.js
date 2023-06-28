import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/router";
import React from "react";

function MeetDetails(props) {
  // const router = useRouter();
  // const id = router.query.meetupId;
  // const item = meetups.find((e) => e.id === id);
  return <MeetupDetails item={props.item} />;
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  //cant use hooks here.
  //fetch the data for single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      item: {
        id: "m2",
        title: "another meetup",
        image:
          "https://images.unsplash.com/photo-1602271886918-bafecc837c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29tZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        address: "different 421323,soem some",
      },
    },
  };
}

export default MeetDetails;
