import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


function Feeling () {

    const history = useHistory();
    const dispatch = useDispatch();

    const feedbackReducer = useSelector((store)=> store.feedbackReducer);

    let [feedback, setFeedback] = useState('')

    const handleInput = (event) =>{
        setFeedback(event.target.value);
    }//end of handleInput

    const handleNext = () => {

        if(feedback === ''){
            alert('you must give an answer before proceeding');
        } else{
            dispatch({
                type: 'SET_FEELING',
                payload: feedback
            })
            console.log('feedback', feedback);
         
            history.push('/understanding');
        }
    }//end of handleNext


    return (
        <>
            <h2>How are you feeling today?</h2>
            <label>Feeling?</label>
            <input
                type="number"
                id="feeling"
                min="0" 
                max="10"
                onChange={handleInput}
            
            />
            <button
            className="next"
            onClick={handleNext}
            
            >
                NEXT
            </button>
        </>
    )

}//end of Feeling

export default Feeling