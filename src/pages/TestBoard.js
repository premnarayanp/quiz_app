import '../styles/testBoard.css';
import { useSelector, useDispatch } from 'react-redux';
import { QuestionCard, TestActionBar } from '../components/index';
import { Navigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { CURRENT_QUESTION_KEY, QUIZ_STATUS_KEY, CURRENT_SELECTED_OPTIONS_KEY, VIOLATIONS_KEY, TOTAL_SCORE_KEY } from '../constants/constants';
// import { setItemInLocalStorage, removeItemFromLocalStorage } from '../constants/index'


function TestBoard(props) {
    const quizReducer = useSelector((state) => state.quizReducer);
    const dispatch = useDispatch();
    const { currentQuestion, quizStatus, showPopUp } = quizReducer;

    // useEffect(() => {
    //     dispatch(resetQuiz());
    //     if (currentQuestion === 0) {
    //         setItemInLocalStorage(CURRENT_QUESTION_KEY, 0);
    //         setItemInLocalStorage(VIOLATIONS_KEY, 0);
    //         setItemInLocalStorage(TOTAL_SCORE_KEY, 0);
    //         setItemInLocalStorage(QUIZ_STATUS_KEY, "NotScheduled");
    //         setItemInLocalStorage(CURRENT_SELECTED_OPTIONS_KEY, []);
    //     }

    // }, []);

    if (quizStatus === "Completed") {
        return (
            <Navigate to="/" replace={true} />
        )
    }

    return (
        <div className="TestBoard" >
            TestBoard
            <QuestionCard
                currentQuestion={currentQuestion}
                quizStatus={quizStatus}
            />
            <TestActionBar />
        </div>
    );
}
export default TestBoard