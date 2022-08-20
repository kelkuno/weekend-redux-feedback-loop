import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx'
import Comments from '../Comments/Comments.jsx'
import ReviewRating from '../ReviewRating/ReviewRating.jsx'
import Submission from '../Submission/Submission.jsx'
import Understanding from '../Understanding/Understanding.jsx'
import Supported from '../Supported/Supported.jsx'
import {HashRouter as Router, Route} from 'react-router-dom';





function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/supported">
          <Supported />
        </Route>
        <Route path="/submission">
          <Submission />
        </Route>
        <Route path="/review">
          <ReviewRating />
        </Route>
        <Route path="/feeling">
          <Feeling />
        </Route>
        <Route path="/comments">
          <Comments  />
        </Route>
      </div>
    </Router>
  );
}

export default App;
