import '../styles/home.css';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setQuizStatus, resetQuiz } from '../redux/action/quizActions'

function Home(props) {
    const quizReducer = useSelector((state) => state.quizReducer);
    const dispatch = useDispatch();
    const { quizStatus, totalScore, showPopUp } = quizReducer;

    const restartQuiz = () => {
        dispatch(resetQuiz());
    }

    const startQuiz = () => {
        console.log("============startQuiz==========")
        dispatch(setQuizStatus("Active"));
        return (
            <Navigate to="/TestBoard" replace={true} />
        )
    }

    return (
        <div className="Home" >
            <table className="quiz_info_table">
                <thead>
                    <tr>
                        <th>Quiz Title</th>
                        <th>Total Question</th>
                        <th>Total Score</th>
                        <th>Correct Answer</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody id="quizTableBody">
                    {
                        quizStatus === "Completed" ?
                            <tr>
                                <td>MERN Quiz</td>
                                <td>10</td>
                                <td>{totalScore}/100</td>
                                <td>{totalScore / 10}</td>
                                <td>19/04/2024</td>
                                <td>Completed</td>
                                <td><button onClick={() => restartQuiz()}>Restart Quiz</button></td>
                            </tr>
                            :
                            <tr>
                                <td>MERN Quiz</td>
                                <td>10</td>
                                <td>_</td>
                                <td>_</td>
                                <td>anyTime</td>
                                <td>Not Completed</td>
                                <td><button onClick={() => startQuiz()}>Start Quiz</button></td>
                            </tr>
                    }
                </tbody>
            </table>

        </div>
    );
}
export default Home
