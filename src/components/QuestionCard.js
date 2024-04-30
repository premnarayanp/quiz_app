//import { useEffect, useRef, useState } from 'react';
import '../styles/questionCard.css';
import { useSelector, useDispatch } from 'react-redux';
import questions from '../constants/questions.json';
import { setCurrentSelectedOption, enableSubmitBtn } from '../redux/action/quizActions'
function QuestionCard(props) {
    const quizReducer = useSelector((state) => state.quizReducer);
    const dispatch = useDispatch();

    const { quizStatus, currentQuestion } = props;
    const { selectedOptions } = quizReducer;

    const handleOptionClick = (selectedAnswer, selectedOption) => {

        // if (currentQuestion === questions.length - 1) {
        //     dispatch(enableSubmitBtn(true));
        // }

        dispatch(setCurrentSelectedOption({
            selectedAnswer: selectedAnswer,
            selectedOption: selectedOption,
            currentQuestion: currentQuestion
        }));
    }

    const logger = () => {
        console.log("currentQuestion=", currentQuestion)
        console.log("selectedOptions=", selectedOptions)
        console.log("selectedOptions[currentQuestion]=", selectedOptions[currentQuestion])
        //console.log("selectedOptions[currentQuestion].selectedOption", selectedOptions[currentQuestion].selectedOption)
    }

    return (
        <div className="QuestionCard" >
            {/* {
                logger()
            } */}
            <div className='questionContainer'>
                <p>
                    <span>Q.{currentQuestion + 1 + ":- "} </span>
                    {questions[currentQuestion].question}
                </p>
            </div>

            <div className='optionContainer'>
                <span className='optionTitle'>Options:-</span>

                <ol className='optionList' type="A" >
                    {
                        questions[currentQuestion].options.map((option, index) => (
                            <li key={currentQuestion + index} >
                                <input
                                    className='selectOptions'
                                    disabled={quizStatus !== "Active"}
                                    type="radio"
                                    onChange={() => handleOptionClick(option, index)}
                                    checked={selectedOptions[currentQuestion] !== undefined && selectedOptions[currentQuestion].selectedOption === index}
                                />
                                <span className='optionText'>{option}</span>

                                {
                                    quizStatus !== "Active" &&
                                    <>
                                        {
                                            questions[currentQuestion].correctOptionIndex === index &&
                                            <div className='wrongRightIcon rightIcon'>
                                                <img src={require('../assets/right.png')} alt="right" />
                                            </div>
                                        }

                                        {
                                            selectedOptions[currentQuestion].selectedOption === index && selectedOptions[currentQuestion].selectedOption !== questions[currentQuestion].correctOptionIndex &&
                                            <div className='wrongRightIcon wrongIcon'>
                                                <img src={require('../assets/wrong.jpg')} alt="wrong" />
                                            </div>
                                        }
                                    </>

                                }
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    );
}
export default QuestionCard

// style={{ backgroundColor: questions[currentQuestion].correctOptionIndex === index ? "rgb(161, 248, 161)" : "white" }}