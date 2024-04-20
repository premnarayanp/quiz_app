import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../redux/action/quizActions'

export default function Navbar(props) {
    const quizReducer = useSelector((state) => state.quizReducer);
    const dispatch = useDispatch();
    const { quizStatus, enableSubmitBtn } = quizReducer;


    const restartQuiz = () => {
        dispatch(resetQuiz());
    }


    return (
        <div className="nav">
            {
                quizStatus === "Active" ?
                    <>
                        <div>
                            <span>Status:</span>
                            <span style={{ color: 'blue' }}> Active</span>
                        </div>
                        <button className='quizSubmitBtn' disabled={enableSubmitBtn} >Submit</button>
                    </>
                    :
                    <>
                        <Link to="/">
                            <button className='homeButton'>Home</button>
                        </Link>
                        {
                            quizStatus === "Completed" ?
                                <>
                                    <Link to="/QuizPreview">
                                        <button className='homeButton'>Submission Preview</button>
                                    </Link>
                                    <button className='quizRestartBtn' onClick={() => restartQuiz()}>Restart Quiz</button>
                                </>
                                :
                                <button className='quizStartBtn'>Start Quiz</button>
                        }

                    </>
            }
        </div>
    );
}