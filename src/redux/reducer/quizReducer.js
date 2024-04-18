import { SET_CURRENT_QUESTION, INCREMENT_VIOLATIONS, RESET_QUIZ, SET_QUIZ_HISTORY, SET_QUIZ_STATUS, SET_TOTAL_SCORE, ENABLE_SUBMIT_BTN } from "../action/actionType"
const initialQuizState = {
    currentQuestion: 0,
    violations: 0,
    totalScore: 0,
    quizStatus: 'NotScheduled',
    quizHistory: [],
    showPopUp: false,
    enableSubmitBtn: false,
};

export default function quizReducer(state = initialQuizState, action) {
    switch (action.type) {
        case SET_CURRENT_QUESTION:
            return {
                ...state,
                currentQuestion: action.data,
            }

        case INCREMENT_VIOLATIONS:
            return {
                ...state,
                violations: state.violations + 1,
            }
        case SET_QUIZ_HISTORY:
            return {
                ...state,
                quizHistory: action.data
            }
        case SET_TOTAL_SCORE:
            return {
                ...state,
                totalScore: action.data
            }

        case SET_QUIZ_STATUS:
            return {
                ...state,
                quizStatus: action.data
            }

        case ENABLE_SUBMIT_BTN:
            return {
                ...state,
                enableSubmitBtn: true
            }
        case RESET_QUIZ:
            return {
                ...state,
                currentQuestion: 0,
                violations: 0,
                totalScore: 0,
                quizHistory: []
            }
        default:
            return state;
    }
}
