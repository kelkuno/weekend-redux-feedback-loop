import { useHistory } from 'react-router-dom';

function Feeling () {

    const history = useHistory();

    const handleNext = () => {
        history.push('/understanding');

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