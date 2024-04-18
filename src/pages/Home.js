import '../styles/home.css';
import { useSelector, useDispatch } from 'react-redux';

function Home(props) {
    const quizReducer = useSelector((state) => state.quizReducer);
    const dispatch = useDispatch();
    const { quizStatus, showPopUp } = quizReducer;

    // const showTaskForm = () => {
    //     //dispatch(disabledTaskBoard({ isDisabledTaskBoard: true }));
    //     dispatch(addTaskFormActions({ isShowTaskForm: true, isEditModeOn: false, editableTaskData: null }));
    // }
    //backgroundColor: isDisabledTaskBoard ? 'gray' : "rgb(213, 213, 216)", filter: isDisabledTaskBoard ? 'blur(1px)' : 'blur(0)'
    return (
        <div className="Home" >
            {
                showPopUp &&
                <>
                    <div className='blurBackground' style={{ filter: 'blur(200px)' }}></div>
                </>
            }

            <div className='taskBoard'>

            </div>


        </div>
    );
}
export default Home
