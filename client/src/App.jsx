import React, { useRef, useState } from "react";
import axios from "axios";
import classNames from "classnames";
import { Novatrix } from "uvcanvas";

function App() {
  const [inputText, setInputText] = useState("");
  const [prediction, setPrediction] = useState(null);
  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset height to auto to correctly calculate new height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to match the content
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    adjustTextareaHeight();
  };

  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:5000/predict",
        { text: inputText },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        setPrediction(response.data.result === 1 ? "Spam" : "Not Spam");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Novatrix className="h-full w-full z-[-999] fixed filter grayscale-[30%]">
        {" "}
      </Novatrix>
      <div className=" h-screen w-full flex flex-col justify-center items-center text-white gap-5">
        <div
          className="
        bg-white bg-opacity-15 backdrop-blur-xl border border-white border-opacity-20 shadow-lg flex glassmorphism flex-col justify-center items-center gap-5  p-8 rounded-xl"
        >
          <h1 className="font-bold text-2xl drop-shadow-md">
            Email/SMS Spam Classifier
          </h1>

          <textarea
            placeholder="Enter an example message here"
            ref={textareaRef}
            className="border-none focus:outline-none focus:border-none h-auto w-full rounded-lg text-gray-700 px-2 py-2 bg-white bg-opacity-80 font-sans overflow-hidden"
            value={inputText}
            onChange={handleInputChange}
          />
          <div className="flex gap-4">
            <button
              className="bg-white bg-opacity-25 font-bold drop-shadow-md text-xl px-2 py-2 rounded-md backdrop-blur-xl border-white border-opacity-20 shadow-lg"
              onClick={handleSubmit}
            >
              Predict
            </button>
            {prediction && (
              <h2
                className={classNames(
                  `font-bold drop-shadow-md text-xl px-2 py-2 rounded-md backdrop-blur-xl border-white border-opacity-20 shadow-lg`,
                  {
                    "bg-red-400 bg-opacity-60": prediction === "Spam",
                    "bg-green-400 bg-opacity-60": prediction === "Not Spam",
                  }
                )}
              >
                {prediction}
              </h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
