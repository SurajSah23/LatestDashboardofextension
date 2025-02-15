import { useState } from "react";

const faqsData = [
  {
    question: "I want to use an Email Finder for one month only. Is it possible?",
    answer: "Yes, most Email Finder tools offer monthly subscriptions.",
  },
  {
    question: "Can I cancel my subscription whenever I want?",
    answer: "Yes, you can cancel your subscription anytime.",
  },
  {
    question: "Do I pay extra to verify the email addresses?",
    answer: "No, email verification is included in your subscription.",
  },
  {
    question: "What is the difference between monthly and yearly plans?",
    answer: "Yearly plans offer significant savings.",
  },
  {
    question: "Can I purchase extra credits if I have a yearly plan?",
    answer: "Yes, additional credits can be purchased.",
  },
  {
    question: "Can I downgrade/upgrade my plan?",
    answer: "Change your plan anytime; it updates instantly with a new billing cycle.",
  },
];

function PlanAndBillingPageThree() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-6 px-4 flex">
      {/* Left Side: Help & Support */}
      <div className="w-1/4">
        <h1 className="text-2xl font-semibold mb-4 lg:translate-y-16 lg:translate-x-6">Help & Support</h1>
      </div>

      {/* Right Side: FAQs in Grid */}
      <div className="w-3/4">
        <div className="grid grid-cols-2 gap-5">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="border p-3 rounded-lg shadow-sm border-gray-200 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center text-left text-sm font-medium"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <img
                  src={
                    openIndex === index
                      ? "https://i.ibb.co/tw56BFtg/Screenshot-2025-02-13-113215-removebg-preview.png"
                      : "https://i.ibb.co/dJsLGv29/Screenshot-2025-02-13-112850-removebg-preview.png"
                  }
                  alt="Toggle Icon"
                  className="h-3 w-3"
                />
              </button>
              {openIndex === index && (
                <div className="mt-1 text-xs text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanAndBillingPageThree;
