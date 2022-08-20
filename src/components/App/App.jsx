import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx'
import Comments from '../Comments/Comments.jsx'
import ReviewRating from '../ReviewRating/ReviewRating.jsx'
import Submission from '../Submission/Submission.jsx'
import Understanding from '../Understanding/Understanding.jsx'
import Supported from '../Supported/Supported.jsx'





function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Understanding />
      <Supported />
      <Submission />
      <ReviewRating />
      <Feeling />
      <Comments  />
    </div>
  );
}

export default App;
