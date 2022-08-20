import { useHistory } from 'react-router-dom';

function Comments () {

    const history = useHistory();

    const handleNext = () => {
        history.push('/review');

    }//end of handleNext

    return (
        <>
            <h2>Any comments you would like to leave?</h2>
            <label>Comments</label>
            <input
                type="text"
                id="comments"
    
            
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