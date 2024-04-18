import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar(props) {
    const quizReducer = useSelector((state) => state.quizReducer);
    const dispatch = useDispatch();
    const { quizStatus, enableSubmitBtn } = quizReducer;

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
                                    <Link to="/">
                                        <button className='homeButton'>Home</button>
                                    </Link>
                                    <button className='quizRestartBtn'>Restart Quiz</button>
                                </>
                                :
                                <button className='quizStartBtn'>Start Quiz</button>
                        }

                    </>
            }
        </div>
    );
}