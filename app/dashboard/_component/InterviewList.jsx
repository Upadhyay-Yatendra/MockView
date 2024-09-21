"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";
import axios from "axios";

const InterviewList = () => {
  const { user } = useUser();

  const [InterviewList, setInterviewList] = useState([]);
  useEffect(() => {
    if (user) {
      console.log(
        "\n\nuser?.primaryEmailAddress?.emailAddress : ",
        user?.primaryEmailAddress?.emailAddress,
        "\n\n\n"
      );
      axios
        .get("http://localhost:4566/interview/taken", {
          params: {
            email: user?.primaryEmailAddress?.emailAddress, // pass email as a query param
          },
          headers: {
            Authorization: `Bearer ${user?.primaryEmailAddress?.emailAddress}`,
          },
        })
        .then((response) => {
          console.log("\n\n\n\n\nResponse recieved", response.data);

          setInterviewList(response.data);
        })
        .catch((error) => {
          console.log("\n\n\n\nError a  agaya");
          console.error(error);
        });
    }
  }, [user]);

  return (
    <div>
      <h2 className="font-medium text-xl">Previous Mock Interviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {InterviewList &&
          InterviewList.map((interview, index) => (
            <InterviewItemCard interview={interview} key={index} />
          ))}
      </div>
    </div>
  );
};

export default InterviewList;
