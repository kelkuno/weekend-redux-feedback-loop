import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Submission (){

    const history = useHistory();

    const handleReset = () => {
        history.push('/feeling');
    }

    return(
        <>
        <h1>Feedback</h1>
        <h3>Thank you for submitting your feedback!</h3>
        <button onClick={handleReset}>Leave more feedback</button>
        </>

    )

}//end of Submission
export default Submission