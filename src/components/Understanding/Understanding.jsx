import { useHistory } from 'react-router-dom';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


function Understanding () {

    const history = useHistory();
    const dispatch = useDispatch();

    const feedbackReducer = useSelector((store)=>{store.feedbackReducer});

    let [feedback, setFeedback] = useState('')

    const handleInput = (event) => {
        setFeedback(event.target.value)
        //console.log(feedback);
    }

    const handleNext = () => {
        if(feedback===''){
            alert('you must provide an answer');
        } else {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: feedback
            })
            history.push('/supported');
        }
    }//end of handleNext
    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <label>Understanding?</label>
            <input
                type="number"
                id="understanding"
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

}//end of Understanding


export default Understanding