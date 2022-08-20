function Feeling () {

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
        </>
    )

}//end of Feeling

export default Feeling