import { SET_CURRENT_QUESTION, SET_CURRENT_SELECTED_OPTION, INCREMENT_VIOLATIONS, RESET_QUIZ, SET_QUIZ_HISTORY, SET_TOTAL_SCORE, SET_QUIZ_STATUS, ENABLE_SUBMIT_BTN } from './actionType';

//--------action creator functions for  Task-----------

export function setCurrentQuestion(questionIndex) {
    return {
        type: SET_CURRENT_QUESTION,
        data: questionIndex
    }
}

export function setCurrentSelectedOption(optionIndex) {
    return {
        type: SET_CURRENT_SELECTED_OPTION,
        data: optionIndex
    }
}

export function incrementViolationsCount(data) {
    return {
        type: INCREMENT_VIOLATIONS,
        //data: data
    }
}


export function setQuizHistory(quizHistory) {
    return {
        type: SET_QUIZ_HISTORY,
        data: quizHistory
    }
}

export function setTotalScore(totalScore) {
    return {
        type: SET_TOTAL_SCORE,
        data: totalScore
    }
}

export function setQuizStatus(status) {
    return {
        type: SET_QUIZ_STATUS,
        data: status
    }
}

export function enableSubmitBtn(val) {
    return {
        type: ENABLE_SUBMIT_BTN,
        data: val
    }
}


export function resetQuiz() {
    return {
        type: RESET_QUIZ,
        data: null
    }
}



