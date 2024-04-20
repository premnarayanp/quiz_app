//import { useEffect, useRef, useState } from 'react';
import '../styles/questionCard.css';
import { useSelector, useDispatch } from 'react-redux';
import questions from '../constants/questions.json';
import { setCurrentSelectedOption } from '../redux/action/quizActions'
function QuestionCard(props) {
    const quizReducer = useSelector((state) => state.quizReducer);
    const dispatch = useDispatch();

    const { quizStatus, currentQuestion } = props;
    const { selectedOptions } = quizReducer;

    const handleOptionClick = (selectedAnswer, selectedOption) => {

        dispatch(setCurrentSelectedOption({
            selectedAnswer: selectedAnswer,
            selectedOption: selectedOption,
            currentQuestion: currentQuestion
        }));
    }

    return (
        <div className="QuestionCard" >
            <div className='questionContainer'>
                <p>
                    <span>Q.{currentQuestion + 1 + ":- "} </span>
                    {questions[currentQuestion].question}
                </p>
            </div>

            <div className='optionContainer'>
                <span>Options:-</span>

                {
                    questions[currentQuestion].options.map((option, index) => (
                        <div key={currentQuestion + index}>
                            <label htmlFor='{currentQuestion}'>({index})</label>
                            <input id='{currentQuestion}'
                                type="radio"
                                onClick={() => handleOptionClick(option, index)}
                                checked={selectedOptions[currentQuestion] && selectedOptions[currentQuestion].selectedOption === index}
                            />
                            <span>{option}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default QuestionCard