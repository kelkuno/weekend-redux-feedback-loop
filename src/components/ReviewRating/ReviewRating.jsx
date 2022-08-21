import {useSelector} from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function ReviewRating () {

    const history = useHistory();

    const feedbackReducer = useSelector(store=>store.feedbackReducer);
    console.log('feedbackReducer"', feedbackReducer);

    const handleSubmit = (event)=> {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/submit',
            data: {
                feedbackReducer
            }
        }).then( response => {
            console.log(response);
            history.push('/submission');
        }).catch(function(error) {
            console.log('error in post', error);
        })

    }//end of handle submit

    return(
        <>
        <h1>Review your feedback</h1>
        <p>Feelings: {feedbackReducer.feeling}</p>
        <p>Understanding:{feedbackReducer.understanding}</p>
        <p>Support:{feedbackReducer.support}</p>
        <p>Comments:{feedbackReducer.comments}</p>
        <form onClick={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
        </>
    )

}//end of Review Rating

export default ReviewRating