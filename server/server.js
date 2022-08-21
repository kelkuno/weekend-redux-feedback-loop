const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

app.post('/submit', (req, res) => {
    const feedback = req.body;
    console.log('here is feedback variable', feedback);
    console.log('req.body feeling', feedback.feedbackReducer.feeling);
    const sqlText = `INSERT INTO "feedback" (feeling, understanding, support, comments)
                    VALUES ($1, $2, $3, $4)`
    pool.query(sqlText, [feedback.feedbackReducer.feeling, feedback.feedbackReducer.understanding, feedback.feedbackReducer.support, feedback.feedbackReducer.comments])
        .then(result =>{
            console.log('added result to database', result);
            res.sendStatus(201);
        })
        .catch(error=> {
            console.log('error in server post', error);
            res.sendStatus(500);
        })
    

})


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});