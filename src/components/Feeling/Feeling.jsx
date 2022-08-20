import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";

function Feeling () {

    const history = useHistory();
    const dispatch = useDispatch()

    let [feedback, setFeedback] = useState({feeling: '', understanding: '', support: '', comments:''})

    const handleInput = (event) =>{
        setFeedback({
            ...feedback, 
            feeling: event.target.value});
    }
    const handleNext = () => {
        dispatch({
            type: 'SET_FEELING',
            payload: feedback
        })

        history.push('/understanding');

    }//end of handleNext

    console.log(feedback);
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