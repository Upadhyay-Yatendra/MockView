"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StartInterview = ({ params }) => {
  const [interViewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  useEffect(() => {
    GetInterviewDetails();
  }, []);
  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
  
      if (result.length === 0) {
        console.error("No interview found with the given ID.");
        setMockInterviewQuestion(null);
        setInterviewData(null);
        return;
      }
  
      const jsonMockResp = JSON.parse(result[0].jsonMockResp);
      console.log(
        "🚀 ~ file: page.jsx:18 ~ GetInterviewDetails ~ jsonMockResp:",
        jsonMockResp
      );
      setMockInterviewQuestion(jsonMockResp);
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Error fetching interview details:", error);
      setMockInterviewQuestion(null);
      setInterviewData(null);
    }
  };

  return (
    <div className="flex flex-col h-[90vh]">
      <div className="flex-grow overflow-auto">
        {interViewData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
            {/* Questions */}
            <QuestionsSection
              mockInterviewQuestion={mockInterviewQuestion}
              activeQuestionIndex={activeQuestionIndex}
            />
            {/* video or audio recording */}
            <RecordAnswerSection
              mockInterviewQuestion={mockInterviewQuestion}
              activeQuestionIndex={activeQuestionIndex}
              interviewData={interViewData}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-white">No interview found with the given ID.</p>
          </div>
        )}
      </div>
      <div className="flex justify-end gap-6 p-4">
        {activeQuestionIndex > 0 && (
          <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>
            Previous Question
          </Button>
        )}
        {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
          <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>
            Next Question
          </Button>
        )}
        {activeQuestionIndex === mockInterviewQuestion?.length - 1 && (
          <Link href={'/dashboard/interview/' + interViewData?.mockId + '/feedback'}>
            <Button>End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default StartInterview;