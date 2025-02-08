import React from 'react';
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-black">
      <h1 className="text-4xl font-bold text-white text-center mb-6">About the Friendship Quiz</h1>
      
      {/* Introduction to the quiz */}
      <div className="mb-6 text-white text-center max-w-2xl">
        <p className="text-lg">
          Welcome to the Friendship Quiz! This quiz is designed to help you explore the dynamics of your friendship with a specific person. 
          By answering a series of questions, you will gain insights into the nature of your relationship and how it fits into your life.
        </p>
        <p className="mt-4">
          After completing the quiz, you will receive results that categorize your friendship into different "planet types," each representing unique traits and characteristics. 
          Use this glossary to understand the meanings behind each planet type and how they relate to your friendship.
        </p>
      </div>

      {/* Step-by-step guide */}
      <div className="mb-6 text-white text-center max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">How the Quiz Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Answer a series of questions about your friendship.</li>
          <li>Each question will help you reflect on different aspects of your relationship.</li>
          <li>At the end of the quiz, you will receive a "planet type" that represents your friendship.</li>
          <li>You can then share your results with your friend to compare your perspectives.</li>
          <li>Simply click the "Share" button to generate a link that you can send to them.</li>
        </ol>
      </div>

      {/* Back to Home Button */}
      <button 
        onClick={() => navigate("/")} 
        className="mt-6 w-full max-w-2xl bg-primary hover:bg-primary/90 text-white p-2 rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default About;
