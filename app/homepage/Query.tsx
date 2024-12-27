"use client";
import { useState } from "react";
import TypingEffect from "../TypingEffect";
const QueryForm = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("Yoou'll know about me here");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse("Submitting...");
    try {
      const res = await fetch(`http://192.168.29.218:8000/?query=${query}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const result = await res.json();
      if (res.ok) {
        setResponse(`${result.response}`);
        setQuery("");
      } else {
        setResponse(`Error: ${result.error}`);
      }
    } catch (error) {
      setResponse("An error occurred.");
      console.error(error); // Log the error to the console
    }
  };

  return (
    <div id="query" className="w-full h-60 place-content-center px-8">
      <h2 className="text-4xl 	w-full place-content-center mb-3">
        Shoot Your Questions
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="text-white border-collapse border-solid border-2 border-blue-50  bg-transparent	w-full p-2"
            type="text"
            id="query"
            name="query"
            placeholder="Enter Your Query Here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div>
        <button
          className="text-black rounded-full bg-white border-solid border-2 border-white  mt-4 p-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="mt-5">
        <TypingEffect text={response} speed={20}></TypingEffect>{" "}
      </div>
    </div>
  );
};

export default QueryForm;
