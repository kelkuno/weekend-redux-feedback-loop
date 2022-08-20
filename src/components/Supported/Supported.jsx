import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';


function Supported () {

    const history = useHistory();
    const dispatch = useDispatch();

    const feedbackReducer = useSelector((store)=>{store.feedbackReducer});

    let [feedback, setFeedback] = useState('');

    const handleInput = (event) => {
        setFeedback(event.target.value);
    
    }

    const handleNext = () => {
        dispatch({
            type: 'SET_SUPPORT',
            payload: feedback
        })

        history.push('/comments');

    }//end of handleNext

    return (
        <>
            <h2>How well are you being supported?</h2>
            <label>Supported?</label>
            <input
                type="number"
                id="supported"
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

}// end of Supported

export default Supported