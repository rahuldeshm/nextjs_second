import MeetupList from "@/components/meetups/MeetupList";
import React from "react";

function HomePage() {
  const meetups = [
    {
      id: "m1",
      title: "first meetup",
      image: "https://static.toiimg.com/photo/75503656.cms",
      address: "some address 421323,soem some",
    },
    {
      id: "m2",
      title: "another meetup",
      image:
        "https://images.unsplash.com/photo-1602271886918-bafecc837c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29tZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      address: "different 421323,soem some",
    },
  ];
  return <MeetupList meetups={meetups} />;
}

export default HomePage;
