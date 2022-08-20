import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

function Comments () {

    const history = useHistory();
    const dispatch = useDispatch();

    const feedbackReducer = useSelector((store)=>{store.feedbackReducer});

    let [feedback, setFeedback] = useState('');

    const handleInput = (event) => {
        setFeedback(event.target.value);
        console.log(feedback);

    }

    const handleNext = () => {
        dispatch({
            type: 'SET_COMMENT',
            payload: feedback
        })
        history.push('/review');

    }//end of handleNext

    return (
        <>
            <h2>Any comments you would like to leave?</h2>
            <label>Comments</label>
            <input
                type="text"
                id="comments"
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

}//end of Comments

export default Comments