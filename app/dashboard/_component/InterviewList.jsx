"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";
import axios from "axios";

const InterviewList = () => {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1); // page number state
  const [totalPages, setTotalPages] = useState(0); // total pages state

  useEffect(() => {
    if (user) {
      axios
        .get(process.env.NODE_SERVER_URI + "/interview/taken", {
          params: {
            email: user?.primaryEmailAddress?.emailAddress,
            page: pageNumber, // pass page number as a query param
          },
          headers: {
            Authorization: `Bearer ${user?.primaryEmailAddress?.emailAddress}`,
          },
        })
        .then((response) => {
          console.log("Response received ->", response.data);
          setInterviewList(response.data.interviews || []); // update interview list
          setTotalPages(response.data.totalPages || 0); // update totalPages
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    }
  }, [user, pageNumber]); // add pageNumber to dependency array

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div>
      <h2 className="font-medium text-xl">Previous Interviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {interviewList.length > 0 ? (
          interviewList.map((interview, index) => (
            <InterviewItemCard interview={interview} key={index} />
          ))
        ) : (
          <p>No interviews found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center my-5">
          <div className="flex gap-5 p-5">
            {pageNumber > 1 && (
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => handlePageChange(pageNumber - 1)}
              >
                Previous
              </button>
            )}

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`py-2 px-4 border border-gray-400 rounded ${
                  pageNumber === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {pageNumber < totalPages && (
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => handlePageChange(pageNumber + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewList;
