import React from "react";
import AddNewInterview from "./_component/AddNewInterview";
import InterviewList from "./_component/InterviewList.jsx";

const Dashboard = () => {
  return (
    <div className="p-10">
      {/* <h2 className="font-bold text-2xl">Dashboard</h2> */}
      <h2 className="text-gray-500 font-bold text-2xl">Create and Start Your AI Mock Interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterview/>
      </div>
      {/* previous interview questions */}
      <InterviewList/>
    </div>
  );
};

export default Dashboard;