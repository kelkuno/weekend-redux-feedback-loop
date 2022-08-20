import { useHistory } from 'react-router-dom';


function Supported () {

    const history = useHistory();

    const handleNext = () => {
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