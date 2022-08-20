import { useHistory } from 'react-router-dom';


function Understanding () {

    const history = useHistory();

    const handleNext = () => {
        history.push('/supported');

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