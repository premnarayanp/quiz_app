import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/app.css';
import { useSelector, useDispatch } from 'react-redux';
import { Home, QuizPreview, TestBoard } from "../pages/index"

export default function App(props) {
  const quizReducer = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();
  const { quizStatus } = quizReducer;

  const Page404 = () => {
    return <h1>404</h1>
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {
          quizStatus === "Active"
            ? <Route path="/QuizPreview" element={<QuizPreview />} />
            :
            <Route path="/" element={<Home />} />
        }

        {
          quizStatus === "Completed" &&
          <Route path="/TestBoard" element={<TestBoard />} />
        }

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}