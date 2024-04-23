import '../styles/testBoard.css';
import { useSelector, useDispatch } from 'react-redux';
import { QuestionCard, TestActionBar } from '../components/index';
import { Navigate } from 'react-router-dom';
import screenfull from 'screenfull';
import { useEffect, useState } from 'react';

import { incrementViolationsCount } from "../redux/action/quizActions";
import { IS_FULL_SCREEN_KEY } from '../constants/constants';
import { getItemFromLocalStorage, setItemInLocalStorage } from '../constants/index';

function TestBoard(props) {
    const [isFullscreen, setIsFullscreen] = useState(JSON.parse(getItemFromLocalStorage(IS_FULL_SCREEN_KEY)));

    const dispatch = useDispatch();
    const quizReducer = useSelector((state) => state.quizReducer);
    const { currentQuestion, quizStatus, showPopUp } = quizReducer;

    useEffect(() => {
        if (screenfull.isEnabled) {
            screenfull.on('change', () => {
                // Check if currently in fullscreen

                console.log("isFullscreen on change=", isFullscreen);
                if (!screenfull.isFullscreen) {
                    setItemInLocalStorage(IS_FULL_SCREEN_KEY, false)
                    setIsFullscreen(false);
                    dispatch(incrementViolationsCount());
                }
            });
        }

        return () => {
            if (screenfull.isEnabled) {
                screenfull.off('change');

            }
        };
    }, []);


    const handleFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.request();
            setItemInLocalStorage(IS_FULL_SCREEN_KEY, true)
            setIsFullscreen(true);
        }
    };


    if (quizStatus === "Completed") {
        return (
            <Navigate to="/" replace={true} />
        )
    }

    console.log("isFullscreen=", isFullscreen);
    if (!isFullscreen) {
        return (
            <div className='notAFullScreen'>
                <p >You have exited fullscreen, please enter again to continue the quiz.</p>
                <button onClick={handleFullscreen}>Enter Fullscreen</button>
            </div>
        )
    }

    return (
        <div className="TestBoard" >
            <QuestionCard
                currentQuestion={currentQuestion}
                quizStatus={quizStatus}
            />
            <TestActionBar />
        </div>
    );
}
export default TestBoard