"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const QuestionsPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How does the AI generate mock tests?",
      answer: "Our AI analyzes your chosen subject and difficulty level to create personalized mock tests. It uses advanced algorithms to ensure questions are relevant, challenging, and aligned with standard exam patterns."
    },
    {
      question: "Can I customize the test difficulty?",
      answer: "Yes! You can select from three difficulty levels: Beginner, Intermediate, and Advanced. The AI adjusts question complexity and types accordingly."
    },
    {
      question: "How accurate are the generated questions?",
      answer: "Our AI is trained on verified academic content and real exam patterns. Questions are regularly reviewed and updated. However, we recommend using it as a supplement to your primary study materials."
    },
    {
      question: "What subjects are currently supported?",
      answer: "We currently support Mathematics, Physics, Chemistry, Biology, and Computer Science. More subjects are being added based on user demand."
    },
    {
      question: "Can I save my test progress?",
      answer: "Yes, your progress is automatically saved. You can pause and resume tests at any time. Premium users get unlimited saves and detailed performance analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                {openFaq === index ? 
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" /> : 
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                }
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;