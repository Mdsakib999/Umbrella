import React, { useEffect, useState } from "react";

const CustomerFeedback = () => {
  const feedbackData = [
    {
      text: `Original and with an innate understanding of their customer’s needs, always pleasure to their service.`,
      name: "Jack Hakman",
      title: "",
      image:
        "https://img.freepik.com/free-photo/awkward-smiling-man-feel-indecisive_176420-18009.jpg?w=996&t=st=1701583573~exp=1701584173~hmac=0034ab6010aedc19e1c2bb3f3a7a37b59c533313a7c7b89ad9c6e06b70c72ed1",
    },
    {
      text: `Their dedication to maintaining authenticity and an intuitive grasp of their clientele's preferences ensure a consistently delightful experience.`,
      name: "John Klasan",
      title: "",
      image:
        "https://attractmorematches.com/wp-content/uploads/2023/10/Screenshot-2023-10-18-at-5.08.47-PM.png",
    },
    {
      text: `With a profound insight into customer desires, they consistently deliver service that exceeds expectations, making each interaction a joyous occasion.`,
      name: "Angelina Doli",
      title: "",
      image:
        "https://qph.cf2.quoracdn.net/main-qimg-f1f534fd992d4bbbd1b5c2bfb0b640a5-lq",
    },
  ];

  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFeedbackIndex(
        (prevIndex) => (prevIndex + 1) % feedbackData.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentFeedbackIndex, feedbackData.length]);

  const currentFeedback = feedbackData[currentFeedbackIndex];

  return (
    <div className=" bg-slate-100 py-20">
      

      {/* Feedback */}

      <div>
        <div className="w-full  mx-auto px-7 py-4 lg:py-7    text-lg text-center"> 
        <span className="text-5xl font-mono text-sky-700">"</span>
        <h1 className="mb-3 lg:text-3xl lg:w-[70%] lg:mx-auto">
          {currentFeedback.text}
        </h1>
        <span className="text-5xl font-mono text-sky-700">"</span>

        </div>
        

        {/*  */}

        <div className=" flex items-center justify-center gap-x-4 my-4">
          <div className="w-[60px] h-[60px] rounded-full border-4 border-blue-500">
            <img
              className="rounded-full h-full w-full"
              src={currentFeedback.image}
              alt=""
            />
          </div>

          <div className="my-5">
            <p className="font-bold">{currentFeedback.name}</p>
            <p className="font-semibold">{currentFeedback.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
